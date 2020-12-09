import React from "react";
import { useSelector } from "react-redux";
import { Button, Table, Popconfirm, notification } from "antd";
import "antd/dist/antd.css";
import "./ListTodo.css";
import { deleteTodo, setActiveTodo } from "../../actions/todo";
import { useDispatch } from "react-redux";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};

const openNotification = (placement) => {
  notification.info({
    message: `TODO completed  `,
    placement,
  });
};

const openNotificationDelete = (placement) => {
  notification.info({
    message: `TODO delete  `,
    placement,
  });
};

function ListTodo(props) {
  //lấy list todo từ trong state
  const todoList = useSelector((state) => state.todo.todoList);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Title",
      key: "title",
      render: (record) => (
        <h4 
        className={record.id === record.deActive ? "active" : ""}       
        >
          {record.title}
        </h4>
      ),
      // filters: [
      //   {
      //     text: "Hide Completed",
      //     value: "Hide Completed",
      //   },
      // ],
      // onFilter: (value, record) => record.deActive === record.id,
    },
    {
      title: "Date",
      key: "date",
      render: (record) => (
        <h4 className={record.id === record.deActive ? "active" : ""}>
          {record.date}
        </h4>
      ),
    },
    {
      title: "Action",
      render: (record) => (
        <div className="action-btn">
          <Button
            type="button"
            className="ant-btn ant-btn-primary 
                  btn-complete"
            onClick={() => handleClick(record)}
          >
            Complete
          </Button>
          <Popconfirm
            title="Are you sure to delete this todo?"
            onConfirm={(e) => confirm(record, e)}
            onCancel={cancel}
            okText="Yes"
            cancelText="Cancel"
          >
            <button
              type="button"
              className="ant-btn ant-btn-primary ant-btn-dangerous"
              href="#"
            >
              Delete
            </button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  function confirm(record) {
    openNotificationDelete("bottomLeft");
    const action = deleteTodo(record);
    dispatch(action);
  }

  function cancel(e) {}

  function handleClick(record) {
    openNotification("bottomLeft");
    const action = setActiveTodo(record);
    dispatch(action);
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  

  return (
    <div>
      <Table  columns={columns} 
              dataSource={todoList} 
              rowSelection={{ ...rowSelection }}
              size="middle" 
      />
    </div>
  );
}

export default ListTodo;
