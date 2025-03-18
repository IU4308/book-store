import Header from "./components/Header";
import Row from "./components/Row";


export default function Home() {
    return (
        <main className="min-h-screen p-2 bg-gray-50">
            <div className="overflow-x-auto py-4">
                <table className=" mx-auto border-collapse lg:w-[1280px]">
                    <thead className=" pt-6 pb-6 h-[120px]  lg:w-[1280px] border-b-2">
                        <Header />
                        <tr className="text-left ">
                            <th></th>
                            <th>#</th>
                            <th>ISBN</th>
                            <th>Title</th>
                            <th>Author(s)</th>
                            <th>Publisher</th>
                        </tr>
                    </thead>
                    <tbody className="bg">
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