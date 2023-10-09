import Link from 'next/link';

type Props = {
  pages: number[];
  currentPage: number;
}

const Pagination = ({ pages, currentPage = 1 }: Props) => {
  return (
    <div className="c-pagination">
      {pages.map((page) => (
        <Link href={`/articles/page/${page}`} key={page} className={`c-pagination__link c-pagination__link--${currentPage == page ? 'current' : page
          }`}>
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
