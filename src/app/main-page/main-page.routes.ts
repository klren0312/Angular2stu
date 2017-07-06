import { MainPageComponent } from './main-page.component';
import { MainPageMonitorComponent } from './main-page-monitor/main-page-monitor.component';

export const mainPageRoutes = [{
	path: '',
	component: MainPageComponent,
	children: [
		{ path: '', redirectTo: 'mainpagemonitor', pathMatch: 'full' },
		{ path: 'mainpagemonitor', component: MainPageMonitorComponent },
	]
}];
