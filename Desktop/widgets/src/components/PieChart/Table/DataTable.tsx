import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { data } from "./../../../../dist/esm/components/PieChart/Graph/dummy.d";

interface DataType {
  count: number;
  percentage: number | string;
  name: string;
}
interface Data {
  key: number;
  count: number;
  percentage: number | string;
  name: string;
}
interface Props {
  data: Data[];
  reportType: number;
}

const DataTable: React.FC<Props> = ({ data, reportType }) => {
  const [rows, setRows] = React.useState<Data[]>([]);
  React.useEffect(() => {
    console.log(data);
    // const data = data;
    const sortedData: Data[] = data.sort((a, b) => {
      const percentageA = a.count;
      const percentageB = b.count;
      return percentageB - percentageA;
    });
    console.log(sortedData);
    setRows(sortedData);
  }, [data]);

  const columns: ColumnsType<DataType> = [
    {
      title:
        reportType === 1
          ? "Clinic"
          : reportType === 2
          ? "Speciality"
          : reportType === 3
          ? "Status"
          : reportType === 4
          ? "Service"
          : null,
      dataIndex: "name",
      key: "name",
      width: 130,
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
      width: 80,
    },
    {
      title: "%",
      dataIndex: "percentage",
      key: "percentage",
      width: 80,
    },
  ];
  return (
    <Table
      virtual
      bordered={false}
      scroll={{ x: 200, y: 250 }}
      style={{ borderRadius: "5px" }}
      pagination={{ position: ["none", "none"] }}
      columns={columns}
      dataSource={rows}
    />
  );
};

export default DataTable;
