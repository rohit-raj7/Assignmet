// App.tsx
import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import DataTable from "./components/DataTable/DataTable";
import type { User } from "./models/User";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [clearableValue, setClearableValue] = useState("Clear me");

  const sampleData: User[] = [
    { id: "1", name: "Alice", email: "alice@example.com", age: 28 },
    { id: "2", name: "Bob", email: "bob@example.com", age: 34 },
    { id: "3", name: "Charlie", email: "charlie@example.com", age: 22 },
  ];

  const columns = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "email", title: "Email", dataIndex: "email" },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl mb-6 font-bold">React UI Components Showcase</h1>

      {/* --- Basic input --- */}
      <InputField
        label="Name"
        placeholder="Enter your name"
        value={inputValue}
        helperText="This is a helper message."
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* --- Password with toggle --- */}
      <InputField
        label="Password"
        type="password"
        value={passwordValue}
        helperText="Click 👁️ to toggle visibility"
        onChange={(e) => setPasswordValue(e.target.value)}
      />

      {/* --- Invalid state --- */}
      <InputField
        label="Email"
        placeholder="Enter your email"
        value="wrongemail@gmail.com"
        invalid
        errorMessage="Invalid email format"
      />

      {/* --- Disabled state --- */}
      <InputField
        label="Disabled Field"
        value="I am disabled"
        disabled
        helperText="You cannot type here"
      />

      {/* --- Loading state --- */}
      <InputField
        label="Loading Field"
        placeholder="Loading input..."
        value="Fetching..."
        loading
      />

      {/* --- Clearable input --- */}
      <InputField
        label="Clearable Field"
        value={clearableValue}
        onChange={(e) => setClearableValue(e.target.value)}
        showClearButton
        helperText="Click ✖ to clear"
      />

      {/* --- Variants --- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <InputField label="Outlined Variant" placeholder="Outlined" variant="outlined" />
        <InputField label="Filled Variant" placeholder="Filled" variant="filled" />
        <InputField label="Ghost Variant" placeholder="Ghost" variant="ghost" />
      </div>

      {/* --- Sizes --- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <InputField label="Small Size" placeholder="Small input" size="sm" />
        <InputField label="Medium Size" placeholder="Medium input" size="md" />
        <InputField label="Large Size" placeholder="Large input" size="lg" />
      </div>

      {/* --- DataTable Demo --- */}
      <div className="mt-10">
        <h2 className="text-xl mb-4 font-semibold">Data Table Example</h2>
        <DataTable
          data={sampleData}
          columns={columns}
          selectable
          onRowSelect={(rows) => console.log("Selected rows:", rows)}
        />
      </div>
    </div>
  );
};

export default App;
