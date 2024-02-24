// import { SearchInfo } from "components/SearchInfo/SearchInfo";
import FilterGroupCategories from "components/FilterCategories/FilterGroupCategories";
import NewsList from "components/NewsList/NewsList";
import { DashboardGroup } from "./Dashboard.styled";
// import { useState } from "react";

const Dashboard = () => {

    // const [categoriesData, setCategoriesData] = useState('');

    // const handleCategoriesData = (data) => {
    //     setCategoriesData(data);
    //   };

    return(
        <>
         {/* <SearchInfo /> */}
         <DashboardGroup>
            <FilterGroupCategories />
         </DashboardGroup>
         <NewsList />
        </>
    )
}

export default Dashboard;