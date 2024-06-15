import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TableContent from "./components/TableContent";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex mt-2 w-auto">
        <Sidebar />
        <TableContent />
      </div>
    </>
  );
}
