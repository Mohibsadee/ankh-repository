const Board = () => {
    return (
        <div className="flex mt-2 flex-col md:flex-row mx-auto max-w-[1000px] h-auto md:h-[260px]">
            {/* Left Section */}
            <div className="bg-green-600 p-4 md:p-9 w-full max-w-md">
                <h2 className="text-justify flex flex-col items-center">
                    <span className="font-thin text-2xl sm:text-3xl md:text-4xl w-full text-center">
                        We just moved to
                    </span>
                    <span className="font-bold text-3xl sm:text-4xl md:text-5xl w-full text-center">
                        TORANOMON
                    </span>
                    <span className="font-thin text-4xl sm:text-5xl md:text-5xl w-full text-center">
                        4th March 2014
                    </span>
                </h2>
            </div>


            {/* Right Section */}
            <div className="p-6 md:pt-9 md:pr-10 md:pb-9 md:pl-10 w-full md:w-[550px]">
                <p className="text-center font-hirakaku md:text-lg text-sm md:text-start">
                    このたび弊社は、東京オフィスを東京都港区虎ノ門に移転し
                    ２０１４年３月４日(火)大安より営業の運びとなりました。
                    新オフィスは、打ち合わせスペースも多くありますので
                    お近くにお越しの際はどうぞお気軽にお立ち寄りください。
                    今後とも弊社をどうぞよろしくお願い申し上げます。
                </p>
            </div>
        </div>
    );
};

export default Board;
