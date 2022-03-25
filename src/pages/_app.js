import AppLayout from "../components/AppLayout";

function MyApp({ Component }) {
  return <>
    <AppLayout /> <hr/>
    <Component />
  </>
}

export default MyApp