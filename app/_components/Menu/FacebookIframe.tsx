"use client";

interface SocialSwich {
  facebook: boolean;
  twitter: boolean;
  linkedin: boolean;
}

interface Props {
  social: SocialSwich;
  showSocialMedia: (data: string) => void
}

const FacebookIframe: React.FC<Props> = ({social, showSocialMedia }) => {
  return (
    <div className="max-w-xl mx-auto md:pb-4">
      {
        social.facebook && (
          <>
            <button
              onClick={() => showSocialMedia("facebook")}
              className="mb-2 px-3 py-1 rounded-full text-sm bg-white shadow-sm shadow-[#024089] hover:bg-red-600 hover:shadow-[#c41f1f] hover:text-white hover:border-red-600 transition cursor-pointer"
            >
              {"Fermer"}
            </button>
            <div className="relative rounded-md shadow-sm shadow-[#024089] scale-90 md:scale-100 bg-white overflow-hidden">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fgammaniger%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="w-[340px] h-[500px]"
              ></iframe>
            </div>
          </>
        )
      }
    </div>
  )
}

export default FacebookIframe