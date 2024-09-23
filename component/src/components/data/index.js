export const fileData = {
  id: 1,
  name: "root",
  isFolder: true,
  child: [
    {
      id: 2,
      name: "folder1",
      isFolder: true,
      child: [
        {
          id: 3,
          name: "folder2",
          isFolder: true,
          child: [
            { id: 4, name: "file1.txt", isFolder: false, child: [] },
            { id: 5, name: "file2.txts", isFolder: false, child: [] },
          ],
        },
      ],
    },
  ],
};
