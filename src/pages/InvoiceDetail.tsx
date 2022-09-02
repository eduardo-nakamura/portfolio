import { useParams,
  useNavigate,
  useLocation, } from "react-router-dom";
import { getInvoice, deleteInvoice  } from "../assets/data";

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId ? params.invoiceId : '', 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice && invoice.amount}</h2>
      <p>
        {invoice && invoice.name}: {invoice && invoice.number}
      </p>
      <p>Due Date: {invoice && invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice && invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}