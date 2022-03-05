import Head from "next/head";
import FormItem from "../../components/form-item";
import Page from "../../components/page";

export default function CreateItem() {
  return (
    <>
      <Head>
        <title>Criar item</title>
      </Head>
      <Page pageName="Criar item">
        <FormItem />
      </Page>
    </>
  );
}
