import { DOCUMENT } from "./index.js";

interface GetFileResponse {
  name: string;
  role: string;
  lastModified: string;
  editorType: string;
  thumbnailUrl: string;
  version: string;
  document: DOCUMENT;
  components: Map<string, Component>;
  componentSets: Map<string, ComponentSet>;
  schemaVersion: 0;
  styles: Map<string, Style>;
  mainFileKey: string;
  branches: [
    {
      key: string;
      name: string;
      thumbnail_url: string;
      last_modified: string;
      link_access: string;
    }
  ];
}

interface GetFileNodesResponse {
  name: string;
  role: string;
  lastModified: string;
  editorType: string;
  thumbnailUrl: string;
  err: string;
  nodes: Record<
    string,
    {
      document: DOCUMENT;
      components: Map<string, Component>;
      schemaVersion: 0;
      styles: Map<string, Style>;
    }
  >;
}

interface GetImageResponse {
  err: string;
  images: Map<string, string>;
  status: number;
}

interface GetImageFillsResponse {
  images: Record<string, string>;
}
