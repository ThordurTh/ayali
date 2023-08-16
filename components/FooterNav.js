import Link from "next/link";

const FooterNav = ({ currentPage, setActiveLink }) => {
  const activeLink = (path) => {
    setActiveLink(path);
  };

  const pageNames = [
    "front",
    "services",
    // "cases",
    "packages",
    "company",
    "contact",
  ];
  const totalPages = pageNames.length;
  const previousPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav className="footer_nav">
      {previousPage && (
        <Link
          href={currentPage === 2 ? "/" : `/${pageNames[previousPage - 1]}`}
        >
          <a onClick={() => activeLink(`/${pageNames[previousPage - 1]}`)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            {pageNames[previousPage - 1]}
          </a>
        </Link>
      )}
      {nextPage && (
        <Link href={pageNames[nextPage - 1]}>
          <a onClick={() => activeLink(`/${pageNames[nextPage - 1]}`)}>
            {pageNames[nextPage - 1]}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </Link>
      )}
    </nav>
  );
};

export default FooterNav;
