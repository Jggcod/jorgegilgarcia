import GithubIcon from "./Github";
import IconRedirect from "./IconRedirect";
import LinkedInIcon from "./LinkedIn";
import MailIcon from "./Mail";
import ProjectsIcon from "./Projects";

export default function Header() {
  return (
    <header className="flex justify-evenly items-center pt-5">
      <main className="flex gap-x-3">
        <img
          className="rounded-none w-[50px] h-[50px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOFdoclVsGjqT0YHiCwwGLNjor88ki6dhNjZVrjmmHg&s"
          alt="Photo"
        />
        <div className="flex flex-col">
          <span className="text-2xl font-bold">Nombre Apellido</span>
          <span className="opacity-80">Web developer</span>
        </div>
      </main>

      <nav className="flex gap-x-5">
        <IconRedirect href="https://github.com">
          <GithubIcon />
        </IconRedirect>
        <IconRedirect href="https://linkedin.com">
          <LinkedInIcon />
        </IconRedirect>
        {/* Tenemos que linkar esta parte de iconos de la folder con una page de proyectos */}
        <IconRedirect href="">
          <ProjectsIcon />
        </IconRedirect>
        <IconRedirect href="">
          <MailIcon />
        </IconRedirect>
      </nav>
    </header>
  );
}
