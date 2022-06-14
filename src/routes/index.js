import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { OnlyHeaderLayout } from '~/components/layouts';
import Search from '~/pages/Search';

const publicRouter = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: OnlyHeaderLayout },
  { path: '/search', component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
