import ClientPage from './clientpage';


export default async function Page1() {
  const a = 123;
  const apiServerUrl = process.env.API_SERVER ? process.env.API_SERVER : 'no';
  const props = {
    data: apiServerUrl
  };
  return (
    <ClientPage props={props}></ClientPage>
  );
}
