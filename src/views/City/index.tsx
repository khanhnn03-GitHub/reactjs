import { citiesSelector } from "@/recoil/selectors/city"
import { Table } from "antd"
import React from "react"
import { memo } from "react"
import { useRecoilValue } from "recoil"

const City = () => {
  const cities = useRecoilValue(citiesSelector)

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
  ]

  return (
    <React.Fragment>
      <div>asdasdasdsd</div>
      <Table
          dataSource={cities}
          columns={columns}
          pagination={false}
          rowKey="id"
          sticky={true}
      />
    </React.Fragment>
  )
}

export default memo(City)
