import react from "react";
import Layout from "@app/Pages/Layout";

const Home = ({}: { user: string }) => {
    return (
        <>
            <div>Home</div>
        </>
    );
};

Home.layout = (page: react.JSX.Element) => <Layout children={page} />;

export default Home;
