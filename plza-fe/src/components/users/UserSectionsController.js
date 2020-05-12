import React from "react";
import { Switch, Route } from "react-router-dom";

import UserEventsList from './events/UserEventsList';
import UserSettings from './settings/UserSettings';
import UserFavoriteShop from './favoriteShop/UserFavoriteShop';

const UserSectionsController = () => (
  <>
    <Switch>
      <Route path="/users/dash/events">
        <UserEventsList />
      </Route>
    </Switch>
    <Switch>
      <Route path="/users/dash/settings">
        <UserSettings />
      </Route>
    </Switch>
    <Switch>
      <Route path="/users/dash/favoriteShop">
        <UserFavoriteShop />
      </Route>
    </Switch>
  </>
);

export default UserSectionsController;