export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 mx-5">
      <main className="flex gap-x-4">
        <img
          className="rounded-none w-[50px] h-[50px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOFdoclVsGjqT0YHiCwwGLNjor88ki6dhNjZVrjmmHg&s"
          alt="Photo"
        />
        <div className="flex flex-col">
          <span className="text-2xl font-bold">Nombre Apellido</span>
          <span>Web developer</span>
        </div>
      </main>

      <nav className="flex flex-row gap-x-5">
        <a
          href="https://github.com"
          target="_blank">
          Github
        </a>
        <a
          href="https://github.com"
          target="_blank">
          Github
        </a>
        <a
          href="https://github.com"
          target="_blank">
          Github
        </a>
        <a
          href="https://github.com"
          target="_blank">
          Github
        </a>
      </nav>
    </header>
  );
}
