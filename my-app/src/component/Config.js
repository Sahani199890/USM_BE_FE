export const getMapping = async (getData) => {
  try {
    const response = await fetch(`http://localhost:8080/${getData}`, {
      headers: { accessToken: localStorage.getItem("accessToken") },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    alert("You are unauthorized user");
    console.error("Error fetching data:", error);
  }
};

export const postMappingLogin = async (postData) => {
  const response = await fetch(`http://localhost:8080/${postData.url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData.body),
  });
  if (!response.ok) {
    const data = await response.text();
    alert(data);
    return;
  }
  const data = await response.text();
  localStorage.setItem("accessToken", data);
  return data;
};

export const postMapping = async (postData) => {
  console.log(postData);
  const response = await fetch(`http://localhost:8080/${postData.url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accessToken: localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(postData.body),
  });
  if (!response.ok) {
    alert("You are unauthorized user");
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  console.log("POST response:", data);
  return true;
};

export const putMapping = async (putData) => {
  const response = await fetch(`http://localhost:8080/${putData.url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accessToken: localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(putData.body),
  });
  if (response.ok) {
    return response.json();
  } else {
    alert("You are unauthorized user");
    throw new Error(`PUT request failed with status: ${response.status}`);
  }
};

export const deleteMapping = async (value) => {
  const response = await fetch(`http://localhost:8080/${value}`, {
    method: "DELETE",
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  });
  if (response.ok) {
    return response.json();
  } else {
    alert("You are unauthorized user");
    throw new Error(`DELETE request failed with status: ${response.status}`);
  }
};
