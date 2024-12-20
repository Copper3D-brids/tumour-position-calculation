import * as Copper from "copper3d";
import * as THREE from "three";

export interface INrrdCaseNames {
  names: string[];
  details: Array<IDetails>;
  [proName: string]: any;
}
export interface IDetails {
  name: string;
  masked: false;
  has_mesh: boolean;
  file_paths: {
    origin_nrrd_paths: string[];
    registration_nrrd_paths: string[];
    segmentation_breast_points_paths: string[];
    segmentation_breast_model_paths: string[];
    segmentation_manual_mask_paths: string[];
    segmentation_manual_3dobj_paths: string[];
  };
}
export interface IStoredMasks {
  label1: IExportMask[];
  label2: IExportMask[];
  label3: IExportMask[];
  hasData: false;
}
export interface IExportMask {
  caseId?: number;
  sliceIndex?: number;
  dataFormat?: string;
  width?: number;
  height?: number;
  voxelSpacing?: number[];
  spaceOrigin?: number[];
  data?: number[];
  [proName: string]: any;
}
export interface IExportMasks {
  caseId: string;
  masks: IStoredMasks;
}
export interface IReplaceMask {
  caseId: string;
  sliceId: number;
  label: string;
  mask: number[];
}
export interface ISaveSphere {
  caseId: string;
  sliceId: number;
  origin: number[];
  spacing: number[];
  sphereRadiusMM: number;
  sphereOriginMM: number[];
}
export interface ISaveTumourPosition {
  case_name: string;
  position: ICommXYZ;
}
export interface IMaskMesh {
  maskMeshObjUrl?: string;
  meshVolume?: number;
}
export interface IParams {
  params: unknown;
  responseType?: string;
}
export interface ICaseUrls {
  nrrdUrls: Array<string>;
  jsonUrl?: string;
}
export interface ICaseRegUrls {
  nrrdUrls: Array<string>;
}
export interface ILoadUrls {
  [proName: string]: any;
}
export interface ICaseDetails {
  currentCaseId: string;
  details: Array<IDetails>;
  maskNrrd: string;
}
export interface IRegRquest {
  name: string;
  radius?: number;
  origin?: number[];
}
export interface ILoadedMeshes {
  x: THREE.Mesh;
  y: THREE.Mesh;
  z: THREE.Mesh;
  order: number;
}

export interface ICommXYZ {
  x: number;
  y: number;
  z: number;
}

export interface ILeftRightData {
  maskNrrdMeshes: Copper.nrrdMeshesType;
  maskSlices: Copper.nrrdSliceType;
  url: string;
  register: boolean;
}
export interface INipplePoints {
  nodes: {
    right_nipple: number[];
    left_nipple: number[];
  };
  elements: {};
}

export interface IRibSkinPoints {
  Datapoints: number[][];
}

export interface ITumourWindow {
  center:{
    x:number;
    y:number;
    z:number
  }
}


export interface IRequests {
  url: string;
  params: any;
}

export interface IStudyDetails {
  position: ICommXYZ;
  distance: string;
  start: string | number;
  end: string | number;
  duration: string;
}

export interface ITumourStudyClockFace {
  face: "12:00" | "1:00" | "2:00" | "3:00" | "4:00" | "5:00" | "6:00" | "7:00" | "8:00" | "9:00" | "10:00" | "11:00" | "central";
  start: string | number;
  end: string | number;
  duration: string;
}

export interface ITumourStudyReport {
  nipple:IStudyDetails;
  skin: IStudyDetails;
  ribcage:IStudyDetails;
  clock_face: ITumourStudyClockFace;
  start: string | number;
  end: string | number;
  total_duration: string;
  complete: boolean;
}

export interface ITumourStudyWindow {
  center: ICommXYZ;
}

export interface ITumourStudyAppDetail {
  name: string;
  file_path: string;
  tumour_position: ITumourStudyWindow;
  report: ITumourStudyReport;
}

export interface ITumourStudyAppDetails {
  details: ITumourStudyAppDetail[];
}

export interface IKeyboardSettings {
  draw: string;
  undo: string;
  contrast: string[];
  crosshair: string;
  mouseWheel: "Scroll:Zoom" | "Scroll:Slice" | string;
  [key: string]: any;
}