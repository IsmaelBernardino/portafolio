import Skills from "./layouts/Skills";

function Skill() {
  return (
    <div id="skill" className="w-full min-h-screen py-10 md:min-h-full">
      <p className="text-center text-3xl font-semibold sm:mb-5">My Skills</p>
      <div className="flex flex-wrap sm:justify-center mt-4 gap-3">
        <div className="bg-cyan-900 max-w-[600px] mx-4 sm:m-0 rounded-2xl p-6"
        >
          <p className="text-cyan-500 text-center text-xl">
            Technological Skills
          </p>
          <div className="mt-4 flex gap-4 md:gap-10 justify-evenly flex-wrap">
            <Skills
              skill="HTML"
              icon="https://i.postimg.cc/QdcBfYfy/html-5-v1.png"
            />
            <Skills
              skill="CSS"
              icon="https://i.postimg.cc/wjFShghx/121-css3-512.webp"
            />
            <Skills
              skill="JavaScript"
              icon="https://i.postimg.cc/QNcRCMNP/Unofficial-Java-Script-logo-2-svg.png"
            />
            <Skills
              skill="Tailwind"
              icon="https://i.postimg.cc/sgLnwFD7/Tailwind-CSS-Logo-svg.png"
            />
            <Skills
              skill="ReactJS"
              icon="https://i.postimg.cc/brPVkQY5/1200px-React-svg.png"
            />
            <Skills
              skill="Firebase"
              icon="https://i.postimg.cc/nh1mhBNz/firebase-logo-402-F407-EE0-seeklogo-com.png"
            />
            <Skills
              skill="PHP"
              icon="https://i.postimg.cc/h4M12F2v/PHP-logo-svg.png"
            />
            <Skills
              skill="Node JS"
              icon="https://i.postimg.cc/xjHcdLz2/nodejs-logo-FBE122-E377-seeklogo-com.png"
            />
            <Skills
              skill="MySQL"
              icon="https://i.postimg.cc/vTd8nSVd/mysql-icon-3.png"
            />
            <Skills
              skill="PostgreSQL"
              icon="https://i.postimg.cc/nzWBtxgG/Postgresql-elephant-svg.png"
            />
            <Skills
              skill="MongoDB"
              icon="https://i.postimg.cc/KYT8G0ky/mongodb.png"
            />
            <Skills
              skill="Git"
              icon="https://i.postimg.cc/C1w7JqYW/Git-icon-svg.png"
            />
            <Skills
              skill="GitHub"
              icon="https://i.postimg.cc/Fs0pS4Mf/social-github.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
