// post 컴포넌트로부터 총 게시물 수와 페이지 당 게시물 수 현 페이지 번호를 props으로 받아옴 
function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          prev 
        </button>
        {Array(numPages)
          .fill()
          .filter((numPages, index) => ((numPages/5) + 1 > index && ((numPages / 5) + 1)*5) > index)
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}>
              {i + 1}
            </button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          next 
        </button>
      </div>
    </>
  );
}


export default Pagination;