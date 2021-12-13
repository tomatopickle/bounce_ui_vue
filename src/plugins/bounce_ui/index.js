import BApp from './components/App/BApp';
import BAvatar from './components/Avatar/BAvatar';
import BBtn from './components/Btn/BBtn';
import BCard from './components/Card/BCard';
import BCheckbox from './components/Checkbox/BCheckbox';
import BContainer from './components/Container/BContainer';
import BDivider from './components/Divider/BDivider';
import BIcon from './components/Icon/BIcon';
import BInput from './components/Input/BInput';
import BFlex from './components/Flex/BFlex';
import BList from './components/List/BList';
import BListItem from './components/List Item/BListItem';
import BModal from './components/Modal/BModal'
import BNav from './components/Nav/BNav';
import BNavPanel from './components/Nav Panel/BNavPanel';
import BSidebar from './components/Sidebar/BSidebar';
import BSpacer from './components/Spacer/BSpacer';
import BSpinner from './components/Spinner/BSpinner';
import BSwitch from './components/Switch/BSwitch';
import BTab from './components/Tab/BTab';
import BTabContent from './components/Tab Content/BTabContent';
import BTextarea from './components/Textarea/BTextarea';
import "./styles/animations.min.css";
import "./styles/index.styl";
export default {
    install(app, options) {
        app.component("BApp", BApp);
        app.component("BAvatar", BAvatar);
        app.component("BBtn", BBtn);
        app.component("BCard", BCard);
        app.component("BCheckbox", BCheckbox);
        app.component("BContainer", BContainer);
        app.component("BDivider", BDivider);
        app.component("BIcon", BIcon);
        app.component("BInput", BInput);
        app.component("BFlex", BFlex);
        app.component("BList", BList);
        app.component("BListItem", BListItem);
        app.component("BModal", BModal);
        app.component("BNav", BNav);
        app.component("BNavPanel", BNavPanel);
        app.component("BSidebar", BSidebar);
        app.component("BSpacer", BSpacer);
        app.component("BSpinner", BSpinner);
        app.component("BSwitch", BSwitch);
        app.component("BTab", BTab);
        app.component("BTabContent", BTabContent);
        app.component("BTextarea", BTextarea);
        app.config.globalProperties.$toggleTheme = () => {
            document.querySelector("html").classList.toggle("dark");
        };
        if (!options) return
        if (options?.dark) {
            document.querySelector("html").classList.add("dark");
        }
    }
}
export { BApp, BAvatar, BBtn, BCard, BCheckbox, BContainer, BDivider, BIcon, BInput, BFlex, BList, BListItem, BModal, BNav, BNavPanel, BSidebar, BSpacer, BSpinner, BSwitch, BTab, BTabContent, BTextarea }