import {
    BrDesktop,
    BrTablet,
    MainContainer,
    TitleH1
    
} from './MainPage.styled';

const MainPage = () => {
    return (
        <>
            <MainContainer>
                <TitleH1>The future <BrDesktop /> is<BrTablet /> already<BrDesktop /> here</TitleH1>
            </MainContainer>
        </>
    );
};

export default MainPage;