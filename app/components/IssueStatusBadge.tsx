import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const IssueStatusBadge = ({ status }: { status: Status }) => {
  const statusMap: Record<
    Status,
    { label: string; color: "red" | "green" | "violet" }
  > = {
    OPEN: {
      color: "red",
      label: "Open",
    },
    IN_PROGRESS: {
      color: "violet",
      label: "In Progress",
    },
    CLOSED: {
      color: "green",
      label: "Resolved",
    },
  };

  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
