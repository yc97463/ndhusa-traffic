export default function Dashboard() {
    return (
        <div>
            <div className="bg-[#3D5674]">
                <div className="content-auto bg-[url('/img/ndhu-lib-tower.jpeg')] bg-bottom bg-no-repeat bg-cover rounded-bl-[300px]">
                    <div className="h-[calc(85vh)]">
                        <div className="container h-[calc(60vh)] mx-auto flex items-center">
                            <div className="text-center w-full">
                                <h1 className="text-white text-[22px] sm:text-[25px] md:text-[35px] lg:text-[45px]">
                                    Hold on, we are still working on the dashboard.
                                </h1>
                                <p className="text-white md:text-[20px]">Please check back later.</p>
                                <p className="md:text-[20px] my-6 text-zinc-400">
                                    - National Dong Hwa University Student Association -
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer
                className="text-slate-100 normal font-light text-[14px] bg-[url('/img/ndhu-lib-tower.jpeg')] bg-bottom bg-no-repeat bg-cover w-full"
            >
                <div className="flex items-center">
                    <div className="bg-[#3D5674] w-[calc(100vm-20px)] sm:w-[calc(100vw-34px)] md:w-[calc(100vw-46px)] lg:w-[calc(100vw-50px)] rounded-tr-[50px] py-12 px-12 md:px-20 text-right">
                        <p className="text-lg md:text-lg">
                            國立東華大學 - 學生自治會
                        </p>
                        <p className="text-[12px] md:text-[14px]">
                            Copyright © 2024 National Dong Hwa University - Student Association
                        </p>
                        <p className="py-4 text-[12px] md:text-[14px]">
                            Email: <a href="mailto:sa@ndhu.edu.tw">sa@ndhu.edu.tw</a>
                        </p>
                    </div>
                    <div className="[writing-mode:vertical-lr] text-end">
                        <p className="font-bold italic text-2xl">
                            NDHUSA
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
};