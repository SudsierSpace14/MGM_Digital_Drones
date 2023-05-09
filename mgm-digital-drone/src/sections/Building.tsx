export const Building = () => {
    return (
        <section id="building" className="h-[512px] mt-6">
            <div className="flex-center flex-col relative h-full">
                <div className="shadow-filter text-center z-10 px-4">
                    <h1 className="">O site ainda está em construção</h1>
                    <p className="text-xl">Logo logo novos pacotes vão chegar</p>
                </div>
                <img
                    src="https://static.wixstatic.com/media/074e27_a4d66b9435af444cafdbecb30fff271f~mv2.png/v1/fit/w_1000%2Ch_750%2Cal_c%2Cq_80,enc_auto/file.jpg"
                    alt=""
                    className="absolute max-w-sm opacity-50"
                />
            </div>
        </section>
    )
}