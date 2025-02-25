import '@/app/styles/header.css';

export default function SearchBar() {
  return (
    <>
      <div className="searchbar order-1">
        <input type="text" placeholder="Search for custom sweater..." />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M11.9766 19.5039C16.3948 19.5039 19.9766 15.9222 19.9766 11.5039C19.9766 7.08563 16.3948 3.50391 11.9766 3.50391C7.55828 3.50391 3.97656 7.08563 3.97656 11.5039C3.97656 15.9222 7.55828 19.5039 11.9766 19.5039Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M21.975 21.5043L17.625 17.1543"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
