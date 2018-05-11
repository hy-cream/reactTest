/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import BasicForm from '../components/forms/BasicForm';
import HistoryTask from '../components/tables/HistoryTask';
import TaskStatus from '../components/tables/TaskStatus';
// import Icons from '../components/ui/Icons';
// import Buttons from '../components/ui/Buttons';
// import Spins from '../components/ui/Spins';
// import Modals from '../components/ui/Modals';
// import Notifications from '../components/ui/Notifications';
// import Tabs from '../components/ui/Tabs';
// import Banners from '../components/ui/banners';
// import Drags from '../components/ui/Draggable';
// import Dashboard from '../components/dashboard/Dashboard';
// import Gallery from '../components/ui/Gallery';
// import Wysiwyg from 'bundle-loader?lazy!../components/ui/Wysiwyg';  // 按需加载富文本配置
// import Bundle from '../components/widget/Bundle';
// import MapUi from '../components/ui/map';

// const WysiwygBundle = (props) => (
//     <Bundle load={Wysiwyg}>
//         {(Component) => <Component {...props} />}
//     </Bundle>
// );

export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    render() {
        return (
            <Switch>
                <Route exact path="/app/dashboard/index" component={BasicForm} />
                <Route exact path="/app/form/basicForm" component={BasicForm} />
                <Route exact path="/app/table/historyTask" component={HistoryTask} />
                <Route exact path="/app/table/taskStatus" component={TaskStatus} />

                {/*<Route exact path="/app/ui/icons" component={Icons} />
                <Route exact path="/app/ui/buttons" component={Buttons} />
                <Route exact path="/app/ui/spins" component={Spins} />
                <Route exact path="/app/ui/modals" component={Modals} />
                <Route exact path="/app/ui/notifications" component={Notifications} />
                <Route exact path="/app/ui/tabs" component={Tabs} />
                <Route exact path="/app/ui/banners" component={Banners} />
                <Route exact path="/app/ui/wysiwyg" component={WysiwygBundle} />
                <Route exact path="/app/ui/drags" component={Drags} />
                <Route exact path="/app/ui/gallery" component={Gallery} />
                <Route exact path="/app/ui/map" component={MapUi} />*/}

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}