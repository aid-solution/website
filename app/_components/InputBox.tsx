import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import parse from "html-react-parser";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  value: string | number;
  setValue: UseFormSetValue<any>;
  errors?: FieldErrors<any>;
  errorMsg?: string;
  isRequired: boolean;
  datalist?: string[];
  action?: (value: string) => void;
  blurAction?: (value: string) => void;
  isReadOnly?: boolean;
  style?: any;
  min?: string;
  newItem?: (item: string) => void;
}

const InputBox: React.FC<Props> = ({
  name,
  placeholder,
  type,
  register,
  value,
  setValue,
  isRequired,
  errors,
  errorMsg,
  datalist,
  action,
  blurAction,
  isReadOnly,
  style,
  min,
  newItem,
}) => {
  const [datas, setDatas] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string | number>(value);
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const datalistRef = useRef<HTMLDataListElement>(null);

  useEffect(() => {
    setInputValue(value);
    if (datalist) setDatas(datalist);
  }, [value, datalist]);

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    if (datalist) {
      if (!datalist.includes(val)) setValue(name, "");
      handleAutoHideDatalist(e);
    } else {
      if (blurAction) blurAction(val);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setInputValue(val);

    if (datalist) {
      if (val === "") {
        setDatas(datalist);
      } else {
        const filtered = datalist.filter((d) => d.includes(val));
        if (filtered.length > 0) setDatas(filtered);
        else if (newItem) setDatas([`Ajouter &#10077;${val}&#10078;`]);
        else setDatas([`<i>Aucune donnée</i>`]);
      }
    } else if (action) {
      action(val);
    }
  };

  const handleFocus = () => {
    if (datalist && !isReadOnly) setOnFocus(true);
  };

  const handleChoice = (name: string, data: string) => {
    const test = data.split("&#10077;")[1];
    const val = test ? test.replace("&#10078;", "") : data;
    if (data !== "<i>Aucune donnée</i>") {
      if (newItem && datalist && !datalist.includes(val)) newItem(val);
      if (action) action(val);
      setValue(name, val);
      setInputValue(val);
      if (datalist) setDatas([...datalist]);
      handleHideDatalist();
    }
  };

  const handleHideDatalist = () => {
    if (datalist) {
      setOnFocus(false);
      setDatas(datalist);
    }
  };

  const handleAutoHideDatalist = (e: ChangeEvent<HTMLInputElement>) => {
    const body = document.querySelector("body")!;
    const hide = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const input = e.target as HTMLInputElement;
      if (target.tagName !== "OPTION" && event.target !== input) {
        handleHideDatalist();
      }
    };
    body.addEventListener("click", (event: MouseEvent) => {
      hide(event);
      body.removeEventListener("click", (event: MouseEvent) => hide(event));
    });
  };

  return (
    <div className="form-group relative mt-4" style={style}>
      <input
        id={name}
        autoComplete="off"
        type={type}
        className="block p-2 px-0 w-full text-stone-700 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
        onFocus={handleFocus}
        readOnly={isReadOnly}
        min={min}
        {...register(name, {
          required: isRequired,
          onBlur: handleBlur,
          onChange: handleChange,
        })}
      />

      <label
        htmlFor={name}
        className={`absolute text-gray-700 duration-300 transform top-2 left-0 cursor-pointer
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
          peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600
          ${inputValue !== "" ? "-translate-y-6 scale-75 text-green-600" : ""}`}
      >
        {placeholder}
      </label>

      {datalist && onFocus && (
        <datalist
          ref={datalistRef}
          className="block absolute border border-t-0 border-green-600 rounded rounded-t-none w-full max-h-40 overflow-y-auto overflow-x-hidden z-10"
        >
          {datas.map((data, index) => (
            <option
              value={data}
              key={index}
              className={`hover:text-white hover:bg-green-600 px-[5px] ${
                inputValue == data || value == data
                  ? "text-white bg-green-600"
                  : ""
              }`}
              onClick={() => handleChoice(name, data)}
            >
              {parse(data)}
            </option>
          ))}
        </datalist>
      )}

      {errors && errors[name] && (
        <span className="error">{errorMsg || "Champs obligatoire"}</span>
      )}
    </div>
  );
};

export default InputBox;
