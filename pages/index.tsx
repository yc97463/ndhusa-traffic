export default function Survey() {
  return (
    <>
      <div className="container bg-gray-100 rounded-md border border-slate-300">
        {/* This is a survey */}
        {/* Put a banner image here */}
        <div className="w-full h-64 bg-slate-300 bg-cover bg-bottom bg-[url('https://unsplash.com/photos/jIdKrtJF8Uk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzN8fHJvYWR8ZW58MHx8fHwxNjkxMDI5OTE5fDA&w=480')] rounded-t-md"></div>
        <div className="p-6">
          <h1 className="text-2xl font-bold">東華校園用路意見調查</h1>
          <p className="text-gray-500 my-2">
            歡迎<strong>油成</strong>！{" "}
            <a className="text-sky-500">（不是您嗎？）</a>
            <br />
            這是一份簡單問卷，我們想知道您對東華校園用路的看法。
            您的回答將會匿名紀錄，並且不會被用於任何商業用途。請放心填寫。
          </p>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold">歡迎</h2>
            <p className="text-gray-500">
              這份問卷只有兩個問題，填寫時間約為 1 分鐘。
              請您就日常生活中的東華校園用路，回答以下數個問題：
            </p>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold">您的身份為何？</h2>
            <p className="text-gray-500">請填寫您的身份。</p>
            <ul className="grid w-full gap-6 md:grid-cols-3 my-2">
              <li>
                <input
                  type="radio"
                  id="student"
                  name="identity"
                  value="student"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="student"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">學生</div>
                    <div className="w-full">學校的一員</div>
                  </div>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 23.5V21.5H22V23.5H2ZM4 20.5V14.5C3.45 13.6 3.025 12.6458 2.725 11.6375C2.425 10.6292 2.275 9.6 2.275 8.55C2.275 7.53333 2.40417 6.53333 2.6625 5.55C2.92083 4.56667 3.225 3.6 3.575 2.65C3.70833 2.3 3.925 2.02083 4.225 1.8125C4.525 1.60417 4.85833 1.5 5.225 1.5C5.74167 1.5 6.18333 1.675 6.55 2.025C6.91667 2.375 7.06667 2.79167 7 3.275L6.725 5.55C6.625 6.35 6.69583 7.10833 6.9375 7.825C7.17917 8.54167 7.54167 9.17083 8.025 9.7125C8.50833 10.2542 9.09167 10.6875 9.775 11.0125C10.4583 11.3375 11.2 11.5 12 11.5C13 11.5 14.0042 11.6042 15.0125 11.8125C16.0208 12.0208 16.9 12.3167 17.65 12.7C18.4 13.0833 18.9792 13.5708 19.3875 14.1625C19.7958 14.7542 20 15.4833 20 16.35V20.5H4ZM6 18.5H18V16.35C18 15.95 17.9 15.5958 17.7 15.2875C17.5 14.9792 17.2167 14.7333 16.85 14.55C16.1667 14.2167 15.375 13.9583 14.475 13.775C13.575 13.5917 12.75 13.5 12 13.5C10.9 13.5 9.87917 13.275 8.9375 12.825C7.99583 12.375 7.19583 11.7708 6.5375 11.0125C5.87917 10.2542 5.38333 9.37917 5.05 8.3875C4.71667 7.39583 4.61667 6.36667 4.75 5.3C4.58333 5.8 4.4625 6.33333 4.3875 6.9C4.3125 7.46667 4.275 8.01667 4.275 8.55C4.275 9.51667 4.44583 10.4458 4.7875 11.3375C5.12917 12.2292 5.53333 13.1 6 13.95V18.5ZM12 10.5C10.9 10.5 9.95833 10.1083 9.175 9.325C8.39167 8.54167 8 7.6 8 6.5C8 5.4 8.39167 4.45833 9.175 3.675C9.95833 2.89167 10.9 2.5 12 2.5C13.1 2.5 14.0417 2.89167 14.825 3.675C15.6083 4.45833 16 5.4 16 6.5C16 7.6 15.6083 8.54167 14.825 9.325C14.0417 10.1083 13.1 10.5 12 10.5ZM12 8.5C12.55 8.5 13.0208 8.30417 13.4125 7.9125C13.8042 7.52083 14 7.05 14 6.5C14 5.95 13.8042 5.47917 13.4125 5.0875C13.0208 4.69583 12.55 4.5 12 4.5C11.45 4.5 10.9792 4.69583 10.5875 5.0875C10.1958 5.47917 10 5.95 10 6.5C10 7.05 10.1958 7.52083 10.5875 7.9125C10.9792 8.30417 11.45 8.5 12 8.5ZM8 20.5V19.575C8 18.4583 8.3875 17.5 9.1625 16.7C9.9375 15.9 10.8833 15.5 12 15.5H16V17.5H12C11.4333 17.5 10.9583 17.7042 10.575 18.1125C10.1917 18.5208 10 19.0083 10 19.575V20.5H8Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="staff"
                  name="identity"
                  value="staff"
                  className="hidden peer"
                />
                <label
                  htmlFor="staff"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">教職員</div>
                    <div className="w-full">老師、職員</div>
                  </div>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.5C11.45 4.5 10.9792 4.30417 10.5875 3.9125C10.1958 3.52083 10 3.05 10 2.5C10 1.95 10.1958 1.47917 10.5875 1.0875C10.9792 0.695833 11.45 0.5 12 0.5C12.55 0.5 13.0208 0.695833 13.4125 1.0875C13.8042 1.47917 14 1.95 14 2.5C14 3.05 13.8042 3.52083 13.4125 3.9125C13.0208 4.30417 12.55 4.5 12 4.5ZM9 19.5V7.5C8 7.41667 6.98333 7.29167 5.95 7.125C4.91667 6.95833 3.93333 6.75 3 6.5L3.5 4.5C4.8 4.85 6.18333 5.10417 7.65 5.2625C9.11667 5.42083 10.5667 5.5 12 5.5C13.4333 5.5 14.8833 5.42083 16.35 5.2625C17.8167 5.10417 19.2 4.85 20.5 4.5L21 6.5C20.0667 6.75 19.0833 6.95833 18.05 7.125C17.0167 7.29167 16 7.41667 15 7.5V19.5H13V13.5H11V19.5H9ZM8 24.5C7.71667 24.5 7.47917 24.4042 7.2875 24.2125C7.09583 24.0208 7 23.7833 7 23.5C7 23.2167 7.09583 22.9792 7.2875 22.7875C7.47917 22.5958 7.71667 22.5 8 22.5C8.28333 22.5 8.52083 22.5958 8.7125 22.7875C8.90417 22.9792 9 23.2167 9 23.5C9 23.7833 8.90417 24.0208 8.7125 24.2125C8.52083 24.4042 8.28333 24.5 8 24.5ZM12 24.5C11.7167 24.5 11.4792 24.4042 11.2875 24.2125C11.0958 24.0208 11 23.7833 11 23.5C11 23.2167 11.0958 22.9792 11.2875 22.7875C11.4792 22.5958 11.7167 22.5 12 22.5C12.2833 22.5 12.5208 22.5958 12.7125 22.7875C12.9042 22.9792 13 23.2167 13 23.5C13 23.7833 12.9042 24.0208 12.7125 24.2125C12.5208 24.4042 12.2833 24.5 12 24.5ZM16 24.5C15.7167 24.5 15.4792 24.4042 15.2875 24.2125C15.0958 24.0208 15 23.7833 15 23.5C15 23.2167 15.0958 22.9792 15.2875 22.7875C15.4792 22.5958 15.7167 22.5 16 22.5C16.2833 22.5 16.5208 22.5958 16.7125 22.7875C16.9042 22.9792 17 23.2167 17 23.5C17 23.7833 16.9042 24.0208 16.7125 24.2125C16.5208 24.4042 16.2833 24.5 16 24.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="guest"
                  name="identity"
                  value="guest"
                  className="hidden peer"
                />
                <label
                  htmlFor="guest"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">訪客</div>
                    <div className="w-full">計畫參訪、臨時到訪</div>
                  </div>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 23.5L9 20.5H5C4.45 20.5 3.97917 20.3042 3.5875 19.9125C3.19583 19.5208 3 19.05 3 18.5V4.5C3 3.95 3.19583 3.47917 3.5875 3.0875C3.97917 2.69583 4.45 2.5 5 2.5H19C19.55 2.5 20.0208 2.69583 20.4125 3.0875C20.8042 3.47917 21 3.95 21 4.5V18.5C21 19.05 20.8042 19.5208 20.4125 19.9125C20.0208 20.3042 19.55 20.5 19 20.5H15L12 23.5ZM5 17.35C5.9 16.4667 6.94583 15.7708 8.1375 15.2625C9.32917 14.7542 10.6167 14.5 12 14.5C13.3833 14.5 14.6708 14.7542 15.8625 15.2625C17.0542 15.7708 18.1 16.4667 19 17.35V4.5H5V17.35ZM12 12.5C12.9667 12.5 13.7917 12.1583 14.475 11.475C15.1583 10.7917 15.5 9.96667 15.5 9C15.5 8.03333 15.1583 7.20833 14.475 6.525C13.7917 5.84167 12.9667 5.5 12 5.5C11.0333 5.5 10.2083 5.84167 9.525 6.525C8.84167 7.20833 8.5 8.03333 8.5 9C8.5 9.96667 8.84167 10.7917 9.525 11.475C10.2083 12.1583 11.0333 12.5 12 12.5ZM12 10.5C11.5833 10.5 11.2292 10.3542 10.9375 10.0625C10.6458 9.77083 10.5 9.41667 10.5 9C10.5 8.58333 10.6458 8.22917 10.9375 7.9375C11.2292 7.64583 11.5833 7.5 12 7.5C12.4167 7.5 12.7708 7.64583 13.0625 7.9375C13.3542 8.22917 13.5 8.58333 13.5 9C13.5 9.41667 13.3542 9.77083 13.0625 10.0625C12.7708 10.3542 12.4167 10.5 12 10.5ZM12 20.7L14.2 18.5H17V18.25C16.3 17.6667 15.525 17.2292 14.675 16.9375C13.825 16.6458 12.9333 16.5 12 16.5C11.0667 16.5 10.175 16.6458 9.325 16.9375C8.475 17.2292 7.7 17.6667 7 18.25V18.5H9.8L12 20.7Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold">
              您已經使用校園道路多久時間了？
            </h2>
            <p className="text-gray-500">
              請選擇您已經使用校園道路多久時間了。
            </p>
            <ul className="grid w-full gap-6 md:grid-cols-3 my-2">
              <li>
                <input
                  type="radio"
                  id="below-1-year"
                  name="years"
                  value="below-1-year"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="below-1-year"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">小於一年</div>
                    <div className="w-full">新生、新職員、訪客</div>
                  </div>
                  <svg
                    width="23"
                    height="37"
                    viewBox="0 0 23 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.799988 37V34H10.95V3.4L1.04999 10.75V7L9.84999 0.5H14.25V34H22.7V37H0.799988Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="about-3-years"
                  name="years"
                  value="about-3-years"
                  className="hidden peer"
                />
                <label
                  htmlFor="about-3-years"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">大約三年</div>
                    <div className="w-full">舊生、教職員</div>
                  </div>
                  <svg
                    width="49"
                    height="38"
                    viewBox="0 0 49 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 37.5C8.30001 37.5 5.73335 36.5667 3.80001 34.7C1.90001 32.8333 0.950012 30.3167 0.950012 27.15H4.25001C4.25001 29.4167 4.91668 31.2167 6.25001 32.55C7.58335 33.8833 9.33335 34.55 11.5 34.55C13.6667 34.55 15.4167 33.8833 16.75 32.55C18.0833 31.2167 18.75 29.4167 18.75 27.15V24.15C18.75 21.95 18.1 20.2167 16.8 18.95C15.5 17.6833 13.7333 17.05 11.5 17.05H8.10001V14.2L17.7 3.5H2.10001V0.5H21.35V3.6L12 14.15C15.0667 14.25 17.5 15.2 19.3 17C21.1333 18.7667 22.05 21.15 22.05 24.15V27.15C22.05 30.3167 21.0833 32.8333 19.15 34.7C17.25 36.5667 14.7 37.5 11.5 37.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M35.5805 32.1V21.9H25.7805V18.95H35.5805V8.75H38.8805V18.95H48.6805V21.9H38.8805V32.1H35.5805Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="above-5-years"
                  name="years"
                  value="above-5-years"
                  className="hidden peer"
                />
                <label
                  htmlFor="above-5-years"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">超過五年</div>
                    <div className="w-full">延畢生、教職員</div>
                  </div>
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 37.5C7.55001 37.5 4.98335 36.5667 3.05001 34.7C1.15001 32.8333 0.200012 30.3167 0.200012 27.15H3.50001C3.50001 29.4167 4.16668 31.2167 5.50001 32.55C6.83335 33.8833 8.58335 34.55 10.75 34.55C12.9167 34.55 14.6667 33.8833 16 32.55C17.3333 31.2167 18 29.4167 18 27.15V24.8C18 22.4333 17.3667 20.5833 16.1 19.25C14.8333 17.9167 13.0833 17.25 10.85 17.25H1.45001V0.5H20.2V3.5H4.55001L4.60001 14.25H10.95C14.2167 14.25 16.75 15.1833 18.55 17.05C20.3833 18.8833 21.3 21.4667 21.3 24.8V27.15C21.3 30.3167 20.3333 32.8333 18.4 34.7C16.5 36.5667 13.95 37.5 10.75 37.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M34.5805 32.1V21.9H24.7805V18.95H34.5805V8.75H37.8805V18.95H47.6805V21.9H37.8805V32.1H34.5805Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold">您的年齡？</h2>
            <p className="text-gray-500">請填寫您的年齡。</p>
            <div className="flex flex-col space-y-2 my-2">
              <label className="inline-flex items-center">
                <input
                  type="number"
                  className="form-input"
                  placeholder="請輸入數字"
                  min={0}
                />
                <span className="ml-2">歲</span>
              </label>
            </div>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold">您的性別？</h2>
            <p className="text-gray-500">請填寫您的性別。</p>
            <ul className="grid w-full gap-6 md:grid-cols-3 my-2">
              <li>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="male"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">男性</div>
                    <div className="w-full">Male</div>
                  </div>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99999 22L8.29999 9.275C8.21666 8.675 8.37499 8.14583 8.77499 7.6875C9.17499 7.22917 9.67499 7 10.275 7H13.725C14.325 7 14.825 7.22917 15.225 7.6875C15.625 8.14583 15.7833 8.675 15.7 9.275L14 22H9.99999ZM12 6C11.45 6 10.9792 5.80417 10.5875 5.4125C10.1958 5.02083 9.99999 4.55 9.99999 4C9.99999 3.45 10.1958 2.97917 10.5875 2.5875C10.9792 2.19583 11.45 2 12 2C12.55 2 13.0208 2.19583 13.4125 2.5875C13.8042 2.97917 14 3.45 14 4C14 4.55 13.8042 5.02083 13.4125 5.4125C13.0208 5.80417 12.55 6 12 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="hidden peer"
                />
                <label
                  htmlFor="female"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">女性</div>
                    <div className="w-full">Female</div>
                  </div>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 22V16H7L10.05 8.3C10.2167 7.9 10.475 7.58333 10.825 7.35C11.175 7.11667 11.5667 7 12 7C12.4333 7 12.825 7.11667 13.175 7.35C13.525 7.58333 13.7833 7.9 13.95 8.3L17 16H14V22H10ZM12 6C11.45 6 10.9792 5.80417 10.5875 5.4125C10.1958 5.02083 10 4.55 10 4C10 3.45 10.1958 2.97917 10.5875 2.5875C10.9792 2.19583 11.45 2 12 2C12.55 2 13.0208 2.19583 13.4125 2.5875C13.8042 2.97917 14 3.45 14 4C14 4.55 13.8042 5.02083 13.4125 5.4125C13.0208 5.80417 12.55 6 12 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="other-gender"
                  name="gender"
                  value="other-gender"
                  className="hidden peer"
                />
                <label
                  htmlFor="other-gender"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">其他</div>
                    <div className="w-full">Other</div>
                  </div>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7.5C11.5167 7.5 11.1042 7.32917 10.7625 6.9875C10.4208 6.64583 10.25 6.23333 10.25 5.75C10.25 5.26667 10.4208 4.85417 10.7625 4.5125C11.1042 4.17083 11.5167 4 12 4C12.4833 4 12.8958 4.17083 13.2375 4.5125C13.5792 4.85417 13.75 5.26667 13.75 5.75C13.75 6.23333 13.5792 6.64583 13.2375 6.9875C12.8958 7.32917 12.4833 7.5 12 7.5ZM10 20V15H9V10.5C9 9.95 9.19583 9.47917 9.5875 9.0875C9.97917 8.69583 10.45 8.5 11 8.5H13C13.55 8.5 14.0208 8.69583 14.4125 9.0875C14.8042 9.47917 15 9.95 15 10.5V15H14V20H10Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold">您的所使用的運具？</h2>
            <p className="text-gray-500">請選擇您的所使用的運具。</p>
            <div className="flex flex-col space-y-2 my-2">
              <ul className="grid w-full gap-6 md:grid-cols-2 my-2">
                <li>
                  <input
                    type="radio"
                    id="car"
                    name="transportation"
                    value="car"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="car"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">汽車</div>
                      <div className="w-full">轎車、貨車等</div>
                    </div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 19V20C6 20.2833 5.90417 20.5208 5.7125 20.7125C5.52083 20.9042 5.28333 21 5 21H4C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20V12L5.1 6C5.2 5.7 5.37917 5.45833 5.6375 5.275C5.89583 5.09167 6.18333 5 6.5 5H17.5C17.8167 5 18.1042 5.09167 18.3625 5.275C18.6208 5.45833 18.8 5.7 18.9 6L21 12V20C21 20.2833 20.9042 20.5208 20.7125 20.7125C20.5208 20.9042 20.2833 21 20 21H19C18.7167 21 18.4792 20.9042 18.2875 20.7125C18.0958 20.5208 18 20.2833 18 20V19H6ZM5.8 10H18.2L17.15 7H6.85L5.8 10ZM7.5 16C7.91667 16 8.27083 15.8542 8.5625 15.5625C8.85417 15.2708 9 14.9167 9 14.5C9 14.0833 8.85417 13.7292 8.5625 13.4375C8.27083 13.1458 7.91667 13 7.5 13C7.08333 13 6.72917 13.1458 6.4375 13.4375C6.14583 13.7292 6 14.0833 6 14.5C6 14.9167 6.14583 15.2708 6.4375 15.5625C6.72917 15.8542 7.08333 16 7.5 16ZM16.5 16C16.9167 16 17.2708 15.8542 17.5625 15.5625C17.8542 15.2708 18 14.9167 18 14.5C18 14.0833 17.8542 13.7292 17.5625 13.4375C17.2708 13.1458 16.9167 13 16.5 13C16.0833 13 15.7292 13.1458 15.4375 13.4375C15.1458 13.7292 15 14.0833 15 14.5C15 14.9167 15.1458 15.2708 15.4375 15.5625C15.7292 15.8542 16.0833 16 16.5 16ZM5 17H19V12H5V17Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="scooter"
                    name="transportation"
                    value="scooter"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="scooter"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">機車</div>
                      <div className="w-full">機車、電動機車</div>
                    </div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 19C2.9 19 1.95833 18.6083 1.175 17.825C0.391667 17.0417 0 16.1 0 15C0 14.05 0.304167 13.2083 0.9125 12.475C1.52083 11.7417 2.3 11.2833 3.25 11.1L2.55 10.5H0V9H4.5L7 10.5L11 9H14.15L12.6 7H10V5H13.55L15.65 7.7L19 6V9H16.7L18.45 11.3C18.7 11.2 18.9542 11.125 19.2125 11.075C19.4708 11.025 19.7333 11 20 11C21.1 11 22.0417 11.3917 22.825 12.175C23.6083 12.9583 24 13.9 24 15C24 16.1 23.6083 17.0417 22.825 17.825C22.0417 18.6083 21.1 19 20 19C18.9 19 17.9583 18.6083 17.175 17.825C16.3917 17.0417 16 16.1 16 15C16 14.55 16.0792 14.1125 16.2375 13.6875C16.3958 13.2625 16.6167 12.8667 16.9 12.5L16.4 11.9L13 17H10L8 15.25C7.91667 16.3 7.49167 17.1875 6.725 17.9125C5.95833 18.6375 5.05 19 4 19ZM4 17C4.55 17 5.02083 16.8042 5.4125 16.4125C5.80417 16.0208 6 15.55 6 15C6 14.45 5.80417 13.9792 5.4125 13.5875C5.02083 13.1958 4.55 13 4 13C3.45 13 2.97917 13.1958 2.5875 13.5875C2.19583 13.9792 2 14.45 2 15C2 15.55 2.19583 16.0208 2.5875 16.4125C2.97917 16.8042 3.45 17 4 17ZM20 17C20.55 17 21.0208 16.8042 21.4125 16.4125C21.8042 16.0208 22 15.55 22 15C22 14.45 21.8042 13.9792 21.4125 13.5875C21.0208 13.1958 20.55 13 20 13C19.45 13 18.9792 13.1958 18.5875 13.5875C18.1958 13.9792 18 14.45 18 15C18 15.55 18.1958 16.0208 18.5875 16.4125C18.9792 16.8042 19.45 17 20 17ZM11.95 15L14.6 11H11.35L7.75 12.35L10.75 15H11.95Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="bike"
                    name="transportation"
                    value="bike"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="bike"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">自行車</div>
                      <div className="w-full">自行車、電動自行車</div>
                    </div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 5.5C14.95 5.5 14.4792 5.30417 14.0875 4.9125C13.6958 4.52083 13.5 4.05 13.5 3.5C13.5 2.95 13.6958 2.47917 14.0875 2.0875C14.4792 1.69583 14.95 1.5 15.5 1.5C16.05 1.5 16.5208 1.69583 16.9125 2.0875C17.3042 2.47917 17.5 2.95 17.5 3.5C17.5 4.05 17.3042 4.52083 16.9125 4.9125C16.5208 5.30417 16.05 5.5 15.5 5.5ZM10.8 10.5L13 12.8V19H11V14L7.8 11.2C7.56667 11 7.40833 10.7917 7.325 10.575C7.24167 10.3583 7.2 10.1 7.2 9.8C7.2 9.5 7.24583 9.24583 7.3375 9.0375C7.42917 8.82917 7.58333 8.61667 7.8 8.4L10.6 5.6C10.8167 5.38333 11.0458 5.22917 11.2875 5.1375C11.5292 5.04583 11.8 5 12.1 5C12.4 5 12.6708 5.04583 12.9125 5.1375C13.1542 5.22917 13.3833 5.38333 13.6 5.6L15.5 7.5C15.95 7.95 16.475 8.3125 17.075 8.5875C17.675 8.8625 18.35 9 19.1 9V11C18.05 11 17.1 10.8125 16.25 10.4375C15.4 10.0625 14.65 9.55 14 8.9L13.2 8.1L10.8 10.5ZM5 12C6.41667 12 7.60417 12.4792 8.5625 13.4375C9.52083 14.3958 10 15.5833 10 17C10 18.4167 9.52083 19.6042 8.5625 20.5625C7.60417 21.5208 6.41667 22 5 22C3.58333 22 2.39583 21.5208 1.4375 20.5625C0.479167 19.6042 0 18.4167 0 17C0 15.5833 0.479167 14.3958 1.4375 13.4375C2.39583 12.4792 3.58333 12 5 12ZM5 20.5C5.95 20.5 6.77083 20.1542 7.4625 19.4625C8.15417 18.7708 8.5 17.95 8.5 17C8.5 16.05 8.15417 15.2292 7.4625 14.5375C6.77083 13.8458 5.95 13.5 5 13.5C4.05 13.5 3.22917 13.8458 2.5375 14.5375C1.84583 15.2292 1.5 16.05 1.5 17C1.5 17.95 1.84583 18.7708 2.5375 19.4625C3.22917 20.1542 4.05 20.5 5 20.5ZM19 12C20.4167 12 21.6042 12.4792 22.5625 13.4375C23.5208 14.3958 24 15.5833 24 17C24 18.4167 23.5208 19.6042 22.5625 20.5625C21.6042 21.5208 20.4167 22 19 22C17.5833 22 16.3958 21.5208 15.4375 20.5625C14.4792 19.6042 14 18.4167 14 17C14 15.5833 14.4792 14.3958 15.4375 13.4375C16.3958 12.4792 17.5833 12 19 12ZM19 20.5C19.95 20.5 20.7708 20.1542 21.4625 19.4625C22.1542 18.7708 22.5 17.95 22.5 17C22.5 16.05 22.1542 15.2292 21.4625 14.5375C20.7708 13.8458 19.95 13.5 19 13.5C18.05 13.5 17.2292 13.8458 16.5375 14.5375C15.8458 15.2292 15.5 16.05 15.5 17C15.5 17.95 15.8458 18.7708 16.5375 19.4625C17.2292 20.1542 18.05 20.5 19 20.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="onfoot"
                    name="transportation"
                    value="onfoot"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="onfoot"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">步行</div>
                      <div className="w-full">走路</div>
                    </div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 23L9.8 8.9L8 9.6V13H6V8.3L11.05 6.15C11.2833 6.05 11.5292 5.99167 11.7875 5.975C12.0458 5.95833 12.2917 5.99167 12.525 6.075C12.7583 6.15833 12.9792 6.275 13.1875 6.425C13.3958 6.575 13.5667 6.76667 13.7 7L14.7 8.6C15.1333 9.3 15.7208 9.875 16.4625 10.325C17.2042 10.775 18.05 11 19 11V13C17.8333 13 16.7917 12.7583 15.875 12.275C14.9583 11.7917 14.175 11.175 13.525 10.425L12.9 13.5L15 15.5V23H13V16.5L10.9 14.9L9.1 23H7ZM13.5 5.5C12.95 5.5 12.4792 5.30417 12.0875 4.9125C11.6958 4.52083 11.5 4.05 11.5 3.5C11.5 2.95 11.6958 2.47917 12.0875 2.0875C12.4792 1.69583 12.95 1.5 13.5 1.5C14.05 1.5 14.5208 1.69583 14.9125 2.0875C15.3042 2.47917 15.5 2.95 15.5 3.5C15.5 4.05 15.3042 4.52083 14.9125 4.9125C14.5208 5.30417 14.05 5.5 13.5 5.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="kick-scooter"
                    name="transportation"
                    value="kick-scooter"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="kick-scooter"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">滑板車</div>
                      <div className="w-full">滑板車、電動滑板車</div>
                    </div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 18C4.16667 18 3.45833 17.7083 2.875 17.125C2.29167 16.5417 2 15.8333 2 15C2 14.1667 2.29167 13.4583 2.875 12.875C3.45833 12.2917 4.16667 12 5 12C5.65 12 6.22917 12.1875 6.7375 12.5625C7.24583 12.9375 7.6 13.4167 7.8 14H13.1C13.2833 12.8667 13.7542 11.875 14.5125 11.025C15.2708 10.175 16.2 9.58333 17.3 9.25L15.9 3H12V1H15.9C16.35 1 16.7625 1.14583 17.1375 1.4375C17.5125 1.72917 17.75 2.1 17.85 2.55L19.75 11H19C17.9 11 16.9583 11.3917 16.175 12.175C15.3917 12.9583 15 13.9 15 15V16H7.8C7.6 16.5833 7.24583 17.0625 6.7375 17.4375C6.22917 17.8125 5.65 18 5 18ZM5 16C5.28333 16 5.52083 15.9042 5.7125 15.7125C5.90417 15.5208 6 15.2833 6 15C6 14.7167 5.90417 14.4792 5.7125 14.2875C5.52083 14.0958 5.28333 14 5 14C4.71667 14 4.47917 14.0958 4.2875 14.2875C4.09583 14.4792 4 14.7167 4 15C4 15.2833 4.09583 15.5208 4.2875 15.7125C4.47917 15.9042 4.71667 16 5 16ZM19 18C18.1667 18 17.4583 17.7083 16.875 17.125C16.2917 16.5417 16 15.8333 16 15C16 14.1667 16.2917 13.4583 16.875 12.875C17.4583 12.2917 18.1667 12 19 12C19.8333 12 20.5417 12.2917 21.125 12.875C21.7083 13.4583 22 14.1667 22 15C22 15.8333 21.7083 16.5417 21.125 17.125C20.5417 17.7083 19.8333 18 19 18ZM19 16C19.2833 16 19.5208 15.9042 19.7125 15.7125C19.9042 15.5208 20 15.2833 20 15C20 14.7167 19.9042 14.4792 19.7125 14.2875C19.5208 14.0958 19.2833 14 19 14C18.7167 14 18.4792 14.0958 18.2875 14.2875C18.0958 14.4792 18 14.7167 18 15C18 15.2833 18.0958 15.5208 18.2875 15.7125C18.4792 15.9042 18.7167 16 19 16ZM13 23L7 20H11V18L17 21H13V23Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="bus"
                    name="transportation"
                    value="bus"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="bus"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">公車</div>
                      <div className="w-full">搭公車</div>
                    </div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.65 8.4L20.4 7.65L18.5 5.8V3H17.5V6.2L19.65 8.4ZM6.5 17C6.91667 17 7.27083 16.8542 7.5625 16.5625C7.85417 16.2708 8 15.9167 8 15.5C8 15.0833 7.85417 14.7292 7.5625 14.4375C7.27083 14.1458 6.91667 14 6.5 14C6.08333 14 5.72917 14.1458 5.4375 14.4375C5.14583 14.7292 5 15.0833 5 15.5C5 15.9167 5.14583 16.2708 5.4375 16.5625C5.72917 16.8542 6.08333 17 6.5 17ZM13.5 17C13.9167 17 14.2708 16.8542 14.5625 16.5625C14.8542 16.2708 15 15.9167 15 15.5C15 15.0833 14.8542 14.7292 14.5625 14.4375C14.2708 14.1458 13.9167 14 13.5 14C13.0833 14 12.7292 14.1458 12.4375 14.4375C12.1458 14.7292 12 15.0833 12 15.5C12 15.9167 12.1458 16.2708 12.4375 16.5625C12.7292 16.8542 13.0833 17 13.5 17ZM4 22C3.71667 22 3.47917 21.9042 3.2875 21.7125C3.09583 21.5208 3 21.2833 3 21V18.95C2.7 18.6167 2.45833 18.2458 2.275 17.8375C2.09167 17.4292 2 16.9833 2 16.5V7C2 6.5 2.09583 5.99583 2.2875 5.4875C2.47917 4.97917 2.90417 4.525 3.5625 4.125C4.22083 3.725 5.19167 3.42083 6.475 3.2125C7.75833 3.00417 9.48333 2.95 11.65 3.05C11.5167 3.36667 11.4042 3.6875 11.3125 4.0125C11.2208 4.3375 11.15 4.66667 11.1 5C9.23333 4.95 7.75833 5.01667 6.675 5.2C5.59167 5.38333 4.85 5.65 4.45 6H11C11 6.33333 11.025 6.66667 11.075 7C11.125 7.33333 11.2 7.66667 11.3 8H4V11H13.1C13.7333 11.6333 14.4708 12.125 15.3125 12.475C16.1542 12.825 17.05 13 18 13V16.5C18 16.9833 17.9083 17.4292 17.725 17.8375C17.5417 18.2458 17.3 18.6167 17 18.95V21C17 21.2833 16.9042 21.5208 16.7125 21.7125C16.5208 21.9042 16.2833 22 16 22H15C14.7167 22 14.4792 21.9042 14.2875 21.7125C14.0958 21.5208 14 21.2833 14 21V20H6V21C6 21.2833 5.90417 21.5208 5.7125 21.7125C5.52083 21.9042 5.28333 22 5 22H4ZM18 11C16.6167 11 15.4375 10.5125 14.4625 9.5375C13.4875 8.5625 13 7.38333 13 6C13 4.61667 13.4875 3.4375 14.4625 2.4625C15.4375 1.4875 16.6167 1 18 1C19.3833 1 20.5625 1.4875 21.5375 2.4625C22.5125 3.4375 23 4.61667 23 6C23 7.38333 22.5125 8.5625 21.5375 9.5375C20.5625 10.5125 19.3833 11 18 11ZM6 18H14C14.55 18 15.0208 17.8042 15.4125 17.4125C15.8042 17.0208 16 16.55 16 16V13H4V16C4 16.55 4.19583 17.0208 4.5875 17.4125C4.97917 17.8042 5.45 18 6 18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="other-transportation"
                    name="transportation"
                    value="other-transportation"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="other-transportation"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">其他</div>
                      <div className="w-full">被載</div>
                    </div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 20V4H6V20H4ZM11 8V4H13V8H11ZM11 14V10H13V14H11ZM11 20V16H13V20H11Z"
                        fill="currentColor"
                      />
                      <path d="M18 4V20H20V4H18Z" fill="currentColor" />
                    </svg>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold">有意見的地點？</h2>
            <p className="text-gray-500">
              請在地圖上拖曳至您有意見的地點，可以是您覺得不安全的地方，或是您覺得有改善空間的地方。
            </p>
            <div className="flex flex-col space-y-2 my-2">
              <label className="inline-flex items-center">
                <input
                  type="text"
                  className="form-input"
                  placeholder="請輸入文字"
                />
              </label>
            </div>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold">該地點分類？</h2>
            <p className="text-gray-500">請您為該地點的意見分類。</p>
            <ul className="grid w-full gap-6 md:grid-cols-2 my-2">
              <li>
                <input
                  type="radio"
                  id="road-planning"
                  name="category"
                  value="road-planning"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="road-planning"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">道路規劃</div>
                    <div className="w-full">轉角設計、路口行車清晰度</div>
                  </div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21V19H5V21H3ZM3 17V15H5V17H3ZM3 13V11H5V13H3ZM3 9V7H5V9H3ZM3 5V3H5V5H3ZM7 21V19H9V21H7ZM7 5V3H9V5H7ZM11 21V19H13V21H11ZM15 21V19H17V21H15ZM19 21V19H21V21H19ZM19 17V15H21V17H19ZM21 13H19V8C19 7.16667 18.7083 6.45833 18.125 5.875C17.5417 5.29167 16.8333 5 16 5H11V3H16C17.3833 3 18.5625 3.4875 19.5375 4.4625C20.5125 5.4375 21 6.61667 21 8V13Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="marking"
                  name="category"
                  value="marking"
                  className="hidden peer"
                />
                <label
                  htmlFor="marking"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">標線設計</div>
                    <div className="w-full">行穿線、標線運用合適直覺與否</div>
                  </div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 20V4H6V20H4ZM11 8V4H13V8H11ZM11 14V10H13V14H11ZM11 20V16H13V20H11Z"
                      fill="currentColor"
                    />
                    <path d="M18 4V20H20V4H18Z" fill="currentColor" />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="footwalk"
                  name="category"
                  value="footwalk"
                  className="hidden peer"
                />
                <label
                  htmlFor="footwalk"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">人行空間</div>
                    <div className="w-full">人行道、行人徒步空間</div>
                  </div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 6V4H18V5.5H17L16 6ZM4 20V4H6V20H4ZM10 8V4H12V8H10ZM10 14V10H12V14H10ZM10 20V16H12V20H10Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.3875 22.55C14.9792 23.1833 15.725 23.5 16.625 23.5C17.9083 23.5 18.8792 23.025 19.5375 22.075C20.1958 21.125 20.5167 20.0583 20.5 18.875L20.95 18.175C21.1333 17.8917 21.4375 17.2542 21.8625 16.2625C22.2875 15.2708 22.5 14.0167 22.5 12.5C22.5 10.7833 22.075 9.35417 21.225 8.2125C20.375 7.07083 19.3 6.5 18 6.5C16.5833 6.5 15.4792 7.12917 14.6875 8.3875C13.8958 9.64583 13.5 11.0167 13.5 12.5C13.5 13.4667 13.6333 14.3583 13.9 15.175C14.1667 15.9917 14.4 16.65 14.6 17.15L14.4 17.475C14.2667 17.7083 14.0833 18.0792 13.85 18.5875C13.6167 19.0958 13.5 19.625 13.5 20.175C13.5 21.125 13.7958 21.9167 14.3875 22.55Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="category-other"
                  name="category"
                  value="category-other"
                  className="hidden peer"
                />
                <label
                  htmlFor="category-other"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">其他</div>
                    <div className="w-full">不在上述分類中</div>
                  </div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.45 17.45L6.05 16.05L9.075 13H2V11H9.075L6.05 7.94999L7.45 6.54999L12.9 12L7.45 17.45ZM13 17V15H22V17H13ZM13 8.99999V6.99999H22V8.99999H13ZM16 13V11H22V13H16Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold">您對該地點的意見？</h2>
            <p className="text-gray-500">
              請填寫您有意見的原因，例如：您覺得這裡不安全，或是您覺得這裡有改善空間。
            </p>
            <div className="flex flex-col space-y-2 my-2">
              <label className="inline-flex items-center">
                <textarea
                  className="form-textarea"
                  placeholder="請輸入文字"
                  rows="4"
                ></textarea>
              </label>
            </div>
          </div>

          <hr className="my-4" />
          <div>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm hover:ring-2 hover:ring-offset-2 hover:ring-offset-slate-50 hover:ring-blue-500/50 active:hover:ring-blue-500 dark:ring-offset-slate-900 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent ">
              送出
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
