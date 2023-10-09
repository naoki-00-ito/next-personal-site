import Link from 'next/link';

type Props = {
  pages: number[];
  currentPage: number;
  baseUrl?: string;
}

const Pagination = ({ pages, currentPage = 1, baseUrl = '/articles/page/' }: Props) => {
  return (
    <div className="c-pagination">
      {pages.map((page) => (
        <Link href={`${baseUrl}${page}`} key={page} className={`c-pagination__link c-pagination__link--${currentPage == page ? 'current' : page
          }`}>
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
