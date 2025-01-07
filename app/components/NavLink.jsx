import Link from "next/link";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick} // Attach the custom smooth scroll handler
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
