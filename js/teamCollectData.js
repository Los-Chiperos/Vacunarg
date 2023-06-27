const team = {"team":[
   {
        "id":0,
    "nombre": "Cristian",
    "role": "Técnico en Programción",
    "description": "Backend Developer Api Rest  MySQL JAVA C# Angular",
    "imgURL":"../img/team/Cristian.png",
    "apellido": "Alderete",
    "twitter": "https://twitter.com/cristian",
    "linkedin": "https://www.linkedin.com/in/calderete/",
    "github": "https://github.com/catastones"
  },
  {
	  "id":0,
    "nombre": "Gonzalo",
    "role": "Técnico en Programción",    
    "description": "Fullstack Developer React Nodejs MongoDB",
    "imgURL":"../img/team/gonzalo.jpeg",
    "apellido": "Araya",
    "twitter": "https://twitter.com/gonzalo",
    "linkedin": "https://www.linkedin.com/in/gonzalo-araya-416a6520b/",
    "github": "https://github.com/gonzalo991"
  },
  {
	  "id":0,
    "nombre": "Juan",
    "role": "Técnico en Programción",
    "description": "FullStack Developer UX-UI React HTML CSS",
    "imgURL":"../img/team/juan.jpeg",
    "apellido": "Schallmoser",
    "twitter": "https://twitter.com/SchallmoserJuan",
    "linkedin": "https://www.linkedin.com/in/juanschallmoser/",
    "github": "https://github.com/SchallmoserJuan"
  },
  {
	  "id":0,
    "nombre": "Agustín",
    "role": "Técnico en Programción",
    "description": "Frontend Developer React Html CSS JavaScript",
    "imgURL":"../img/team/agustin.jpeg",
    "apellido": "Gómez Aranda",
    "twitter": "https://twitter.com/cristian",
    "linkedin": "https://www.linkedin.com/in/agustin-gomez-aranda/",
    "github": "https://github.com/Chelito2014"
  },
  {
	  "id":0,
    "nombre": "Nicolás",
    "role": "Técnico en Programción",
    "description": "DevOps especializado en infraestructura cloud",
    "imgURL":"../img/team/nicolas.jpeg",
    "apellido": "Zelarayan",
    "twitter": "https://twitter.com/zelarayanFN?t=oaYtXi2vCvVboZCf51hahQ&s=09",
    "linkedin": "https://www.linkedin.com/in/fernando-nicolas-zelarayan/",
    "github": "https://github.com/NicolasZelarayan"
  },
  {
	  "id":0,
    "nombre": "David",
    "role": "Técnico en Programción",
    "description": "Frontend Developer React Html JavaScript", 
    "imgURL":"../img/team/david.jpeg",
    "apellido": "Mercado",
    "twitter": "https://twitter.com/DeividMercad2?t=D3KzeA3BNF1L29VZQFY8Kg&s=08",
    "linkedin": "https://www.linkedin.com/in/david-mercado-510721176/",
    "github": "https://github.com/dav1dM3rcado"
  },
  {
	  "id":0,
    "nombre": "Angelo",
    "role": "Técnico en Programción",
    "description": "WEB Developer React Nodejs MongoDB",
     "imgURL":"../img/team/angelo.jpeg",
    "apellido": "Pertus",
    "twitter": "https://twitter.com/",
    "linkedin": "https://www.linkedin.com/in/angelo-pertus-234795201/",
    "github": "https://github.com/Angelopertus"
  },
  {
	  "id":0,
    "nombre": "Leonardo",
    "role": "Técnico en Programción",
    "description": "SysAdmin especializado en desarrollo web",
     "imgURL":"../img/team/leonardo.jpeg",
    "apellido": "Valdez",
    "twitter": "https://twitter.com/",
    "linkedin": "https://www.linkedin.com/in/leonardo-javier-valdez-19106326a/",
    "github": "https://github.com/Leonardo-Valdez"
  }]
};


async function getData(){
await fetch('json/team.json')
    .then((response) =>  response.json())
    .then((json) => Recorrer(json)
    
    );
}



function display(item) {

const articule = `
<div>
          <div class="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img class="absolute object-cover w-full h-full rounded"
              src=${item.imgURL}
              alt="Person" />
          </div>
          <div class="flex flex-col sm:text-center">
            <p class="text-lg font-bold">${item.nombre } ${item.apellido} </p>
            <p class="mb-5 text-xs text-gray-800">${item.role }</p>
            <p class="mb-5 text-xs text-gray-800">${item.description }</p>
            <div class="flex items-center space-x-3 sm:justify-center">
              <a href="${item.twitter}" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z">
                  </path>
                </svg>
              </a>
              <a href="${item.linkedin}" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                  </path>
                </svg>
              </a>
                <a href="${item.github}" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

`
document.getElementById("CardTeamMember").innerHTML += articule;
}
function Recorrer(json){
const grupo = team.team;
grupo.forEach(item => display(item));
}

getData();
;