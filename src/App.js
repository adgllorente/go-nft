import heroLogo from "./assets/hero-logo.png";
import nftLogo from "./assets/nft.png";
import { useNFTCollection, useNFTList } from "@thirdweb-dev/react";

export function App() {
  const collection = useNFTCollection(
    "0x042Aa8C84F132DB35695Cbc21e1f3c9f8B34D559"
  );
  const { data: allNfts } = useNFTList(collection);

  return (
    <>
      <header className="text-gray-600 body-font bg-grey-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"></nav>
          <a
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img alt="Movistar TV NFT" className="h-6" src={nftLogo} />
            <span className="ml-3 text-xl">Movistar TV NFT</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
        </div>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Obtén NFTs gratis
              <br className="hidden lg:inline-block" />
              en Movistar TV
            </h1>
            <p className="mb-4 leading-relaxed">
              Cada vez que compras un contenido, ves una serie, una película o
              tu partido de fútbol favorito, podrás obtener un NFT exclusivo que
              podrás usar como avatar de tu perfil.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroLogo}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Últimos Drops
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Estos son los últimos drops que nuestros usuarios han obtenido por
              ver sus series y películas favoritas en Movistar TV.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[...(allNfts || [])]
              ?.reverse()
              .slice(0, 4)
              ?.map((nft) => {
                return (
                  <div
                    key={nft.metadata.hash}
                    className="xl:w-1/4 md:w-1/2 p-4"
                  >
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        className="h-50 rounded w-full object-cover object-center mb-6"
                        src={nft.metadata.image}
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        {nft.metadata.name}
                      </h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {nft.owner.slice(0, 6)}...
                      </h2>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
