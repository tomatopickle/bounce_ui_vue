import BApp from './components/App/BApp';
import BBtn from './components/Btn/BBtn';
import BCard from './components/Card/BCard';
import BContainer from './components/Container/BContainer';
import BDivider from './components/Divider/BDivider';
import BIcon from './components/Icon/BIcon';
import BInput from './components/Input/BInput';
import BFlex from './components/Flex/BFlex';
import BModal from './components/Modal/BModal'
import BNav from './components/Nav/BNav';
import BSidebar from './components/Sidebar/BSidebar';
import BSpacer from './components/Spacer/BSpacer';
import BSpinner from './components/Spinner/BSpinner';
import BTab from './components/Tab/BTab';
import BTabContent from './components/Tab Content/BTabContent';
import "./styles/animations.min.css";
import "./styles/index.styl";
export default {
    install(app, options) {
        app.component("BApp", BApp);
        app.component("BBtn", BBtn);
        app.component("BCard", BCard);
        app.component("BContainer", BContainer);
        app.component("BDivider", BDivider);
        app.component("BIcon", BIcon);
        app.component("BInput", BInput);
        app.component("BFlex", BFlex);
        app.component("BModal", BModal);
        app.component("BNav", BNav);
        app.component("BSidebar", BSidebar);
        app.component("BSpacer", BSpacer);
        app.component("BSpinner", BSpinner);
        app.component("BTab", BTab);
        app.component("BTabContent", BTabContent);
        app.config.globalProperties.$toggleTheme = () => {
            document.querySelector("html").classList.toggle("dark");
        };
        if (!options) return
        if (options?.dark) {
            document.querySelector("html").classList.add("dark");
        }
    }
}
export { BApp, BBtn, BCard, BContainer, BDivider, BIcon, BInput, BFlex, BNav, BSidebar, BSpacer, BSpinner, BTab, BTabContent }