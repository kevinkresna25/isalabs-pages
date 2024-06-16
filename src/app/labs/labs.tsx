import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Labs() {
  const labs = [
    {
      title: "OWASP Juice Shop",
      created: "KresnaYangAsli",
      url: "http://156.67.220.220:16401",
    },
    {
      title: "DVWP",
      created: "zeroX397",
      url: "http://pengalilla.com:16401",
    },
    {
      title: "Goole Gruyere",
      created: "KresnaYangAsli",
      url: "http://156.67.220.220:16402",
    },
    {
      title: "LazyWeb",
      created: "zeroX397",
      url: "http://pengalilla.com:16403",
    },
    {
      title: "OWASP Bricks",
      created: "KresnaYangAsli",
      url: "http://156.67.220.220:16403",
    },
    {
      title: "WackoPicko",
      created: "zeroX397",
      url: "http://pengalilla.com:16404",
    },
    {
      title: "TIWAP",
      created: "KresnaYangAsli",
      url: "http://156.67.220.220:16404",
    },
    {
      title: "Hackazon",
      created: "zeroX397",
      url: "http://pengalilla.com:16405",
    },
    {
      title: "VAmPI API",
      created: "KresnaYangAsli",
      url: "http://156.67.220.220:16405",
    },
    {
      title: "XSSable",
      created: "zeroX397",
      url: "http://pengalilla.com:16406",
    },
    {
      title: "Tiredful-API",
      created: "KresnaYangAsli",
      url: "http://156.67.220.220:16406",
    },
    {
      title: "VulnLab",
      created: "zeroX397",
      url: "http://pengalilla.com:16407",
    },
    {
      title: "Badstore",
      created: "zeroX397",
      url: "http://pengalilla.com:16408",
    },
  ];

  const handleButtonClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <h2 className="text-4xl font-bold">LABs Playground</h2>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {labs.map((lab, index) => (
          <div
            key={index}
            className="card w-full bg-gray-800 hover:bg-cyan-900"
          >
            <div className="card-body items-center text-center">
              <h3 className="card-title mb-2 text-2xl">{lab.title}</h3>
              <p className="mb-2">Created by: {lab.created}</p>
              {lab.url.startsWith('https') ? (
                <button 
                  className="btn btn-outline btn-info"
                  onClick={() => handleButtonClick(lab.url)}
                >
                  Visit Lab
                </button>
              ) : (
                <a 
                  href={lab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-info"
                >
                  Visit Lab
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
