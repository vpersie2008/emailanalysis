import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message, Input } from 'antd';
import React, { Component, Suspense } from 'react';
import { PageContainer, FooterToolbar, GridContent } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { connect, Dispatch } from 'umi';
import { AnalysisData } from './data.d';
import PageLoading from './components/PageLoading';


const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));
const EmailMetrics = React.lazy(() => import('./components/EmailMetrics'));


interface AnalysisProps {
    dashboardemailanalysis: AnalysisData;
    dispatch: Dispatch;
    loading: boolean;
}


const AnalysisEmail: React.FC<AnalysisProps> = (props) => {

    const { dispatch } = props;

    const {
        visitData
    } = props.dashboardemailanalysis;


    React.useEffect(() => {
        requestAnimationFrame(() => {
            dispatch({
                type: 'dashboardemailanalysis/fetch',
            });
        });
        return () => {
            dispatch({
                type: 'dashboardemailanalysis/clear',
            });
        }
    }, []);


    return (
        <GridContent>
            <React.Fragment>
                <Suspense fallback={<PageLoading />}>
                    {/* <IntroduceRow loading={props.loading} visitData={visitData} /> */}
                    <EmailMetrics loading={props.loading} visitData={visitData} />
                </Suspense>
            </React.Fragment>
        </GridContent>
    );
};

export default connect(
    ({
        dashboardemailanalysis,
        loading,
    }: {
        dashboardemailanalysis: any;
        loading: {
            effects: { [key: string]: boolean };
        };
    }) => ({
        dashboardemailanalysis,
        loading: loading.effects['dashboardemailanalysis/fetch'],
    }),
)(AnalysisEmail);
