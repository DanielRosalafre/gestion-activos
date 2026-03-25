package com.company.assetsystem.dto;

import java.time.LocalDate;

public class AssignmentRequest {
    private Long assetId;
    private Long employeeId;
    private LocalDate assignedAt;
    private String notes;

    public Long getAssetId() {
        return assetId;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public LocalDate getAssignedAt() {
        return assignedAt;
    }

    public String getNotes() {
        return notes;
    }

    public void setAssetId(Long assetId) {
        this.assetId = assetId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public void setAssignedAt(LocalDate assignedAt) {
        this.assignedAt = assignedAt;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}

