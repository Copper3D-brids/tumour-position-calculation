import { defineStore } from "pinia";
import { ref } from "vue";
import { 
    useDashboardProgrammes, 
    useDashboardCategoryChildren, 
    useDashboardWorkflows, 
    useDashboardWorkflowDetail, 
    useSaveAssayDetails
 } from "@/plugins/dashboard_api";
import { IDashboardCategory, IDashboardWorkflow, IAssayDetails } from "@/models/apiTypes";

export const useDashboardProgrammesStore = defineStore("DashboardProgrammes", () => {
    const dashboardProgrammes = ref<IDashboardCategory[]>();
    const getDashboardProgrammes = async () => {
        dashboardProgrammes.value = await useDashboardProgrammes();
    };
    return {
        dashboardProgrammes,
        getDashboardProgrammes,
    };
});

export const useDashboardCategoryChildrenStore = defineStore("DashboardCategoryChildren", () => {
    const dashboardCategoryChildren = ref<IDashboardCategory[]>();
    const getDashboardCategoryChildren = async (seek_id: string, category: string) => {
        dashboardCategoryChildren.value = await useDashboardCategoryChildren(seek_id, category);
    };
    return {
        dashboardCategoryChildren,
        getDashboardCategoryChildren,
    };
});

export const useDashboardWorkflowsStore = defineStore("DashboardWorkflows", () => {
    const dashboardWorkflows = ref<IDashboardWorkflow[]>();
    const getDashboardWorkflows = async () => {
        dashboardWorkflows.value = await useDashboardWorkflows();
    };
    return {
        dashboardWorkflows,
        getDashboardWorkflows,
    };
});

export const useDashboardWorkflowDetailStore = defineStore("DashboardWorkflowDetail", () => {
    const dashboardWorkflowDetail = ref<IDashboardWorkflow>();
    const getDashboardWorkflowDetail = async (seek_id: string) => {
        dashboardWorkflowDetail.value = await useDashboardWorkflowDetail(seek_id);
    };
    return {
        dashboardWorkflowDetail,
        getDashboardWorkflowDetail,
    };
});

export const useDashboardSaveAssayDetailsStore = defineStore("DashboardSaveAssayDetails", () => {
    const saveAssayDetailsStatus = ref<boolean>();
    const saveAssayDetails = async (body: IAssayDetails) => {
        saveAssayDetailsStatus.value = await useSaveAssayDetails(body);
    };
    return {
        saveAssayDetailsStatus,
        saveAssayDetails,
    };
});
