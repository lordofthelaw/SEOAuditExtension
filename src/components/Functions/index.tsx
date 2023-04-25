import { Tab, TabContent, TabHeader, Tabs } from '../Tabs';
import Summarize from '@mui/icons-material/Summarize';
import Warning from '@mui/icons-material/Warning';
import Link from '@mui/icons-material/Link';
import Error from '@mui/icons-material/Error';
import Robot from '@mui/icons-material/SmartToy';
import TabPanel from '../Tabs/TabPanel';
import Summary from './Summary';
import useInit from '../../hooks/useInit';
import BotRender from './BotRender';
import { GlobalSignal } from '../../signals/globalSignal';
import { useContext } from 'preact/hooks';
import { AppState } from '../../signals/globalContext';
import WarningChecklist from './WarningChecklist';
import ErrorCheckList from './ErrorChecklist';
import LinkDiagnostic from './LinkDiagnostic';

const Functions = () => {
    const state: GlobalSignal = useContext(AppState);
    const { docsInfo, IsProcessing, UpdateActiveTab, savedActiveTab } = useInit(
        state.tabInfo.value,
        state.updateSignal.value
    );

    return (
        <>
            {IsProcessing.value ? (
                <div
                    role="status"
                    className="flex flex-wrap justify-center py-12"
                >
                    <svg
                        aria-hidden="true"
                        class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span class="sr-only">Loading...</span>
                    <div className="w-full"></div>
                    <span className="text-gray-400 font-medium text-lg">
                        Processing...
                    </span>
                </div>
            ) : (
                <Tabs
                    defaultKey={
                        savedActiveTab.value
                            ? (savedActiveTab.value as string)
                            : 'Summary'
                    }
                    className="py-3"
                >
                    <TabHeader>
                        <Tab
                            icon={<Summarize />}
                            tabKey="Summary"
                            callBack={UpdateActiveTab}
                        >
                            Summary
                        </Tab>
                        <Tab
                            icon={<Warning />}
                            tabKey="WarningChecklist"
                            callBack={UpdateActiveTab}
                        >
                            Warning list
                        </Tab>
                        <Tab
                            icon={<Error />}
                            tabKey="ErrorChecklist"
                            callBack={UpdateActiveTab}
                        >
                            Error list
                        </Tab>
                        <Tab
                            icon={<Link />}
                            tabKey="LinkDiagnostic"
                            callBack={UpdateActiveTab}
                        >
                            Link Diagnostic
                        </Tab>
                        <Tab
                            icon={<Robot />}
                            tabKey="BotRender"
                            callBack={UpdateActiveTab}
                        >
                            Bot Render
                        </Tab>
                    </TabHeader>
                    <TabContent>
                        <TabPanel
                            tabKey="Summary"
                            className="p-4 rounded-lg bg-gray-50"
                        >
                            <Summary docsInfo={docsInfo} />
                        </TabPanel>
                        <TabPanel
                            tabKey="WarningChecklist"
                            className="p-4 rounded-lg bg-gray-50"
                        >
                            <WarningChecklist />
                        </TabPanel>
                        <TabPanel
                            tabKey="ErrorChecklist"
                            className="p-4 rounded-lg bg-gray-50"
                        >
                            <ErrorCheckList />
                        </TabPanel>
                        <TabPanel
                            tabKey="LinkDiagnostic"
                            className="p-4 rounded-lg bg-gray-50"
                        >
                            <LinkDiagnostic docsInfo={docsInfo} />
                        </TabPanel>
                        <TabPanel
                            tabKey="BotRender"
                            className="p-4 rounded-lg bg-gray-50"
                        >
                            <BotRender />
                        </TabPanel>
                    </TabContent>
                </Tabs>
            )}
        </>
    );
};

export default Functions;