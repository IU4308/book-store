import Header from "./my-components/Header";
import Row from "./my-components/Row";


export default function Home() {
    return (
        <main className="min-h-screen p-2 ">
            <div className=" py-4">
                <table className=" mx-auto border-collapse lg:w-[1280px]">
                    <thead className="bg-gray-50 pt-6 pb-6 h-[150px]  lg:w-[1280px] ">
                        <Header />
                        <tr className="text-left ">
                            <th className="header-bottom"></th>
                            <th className="header-bottom">#</th>
                            <th className="header-bottom">ISBN</th>
                            <th className="header-bottom">Title</th>
                            <th className="header-bottom">Author(s)</th>
                            <th className="header-bottom">Publisher</th>
                        </tr>
                        <tr>
                            <td colSpan={6} className="bg-[#000] sticky top-[140px]">
                                <div className="h-[1px] "></div>
                            </td>
                        </tr>
                    </thead>
                    <tbody className="">
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                    </tbody>
                </table>
                
            </div>
        </main>

        
    );
}