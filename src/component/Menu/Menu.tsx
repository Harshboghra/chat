import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const toast = useRef<Toast | any>();
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Options",
      items: [
        {
          label: "Chat",
          icon: "pi-chart-bars",
          command: () => {
            navigate("/chat");
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            toast.current.show({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
      ],
    },
    // {
    //   label: "Links",
    //   items: [
    //     {
    //       label: "React Website",
    //       icon: "pi pi-external-link",
    //       url: "https://reactjs.org/",
    //     },
    //     {
    //       label: "Upload",
    //       icon: "pi pi-upload",
    //       command: () => {
    //         // router.push("/fileupload");
    //       },
    //     },
    //   ],
    // },
  ];

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      <Menu model={items} />
    </div>
  );
}
