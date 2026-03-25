package com.company.assetsystem.controller;

import com.company.assetsystem.dto.AssignmentRequest;
import com.company.assetsystem.entity.Assignment;
import com.company.assetsystem.repository.AssignmentRepository;
import com.company.assetsystem.service.AssetService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {

    private final AssetService assetService;
    private final AssignmentRepository assignmentRepository;

    public AssignmentController(AssetService assetService, AssignmentRepository assignmentRepository) {
        this.assetService = assetService;
        this.assignmentRepository = assignmentRepository;
    }

    @GetMapping
    public List<Assignment> getAll() {
        return assignmentRepository.findAll();
    }

    @PostMapping
    public Assignment assign(@RequestBody AssignmentRequest request) {
        return assetService.assignAsset(request);
    }

    @PutMapping("/{id}/return")
    public Assignment returnAsset(@PathVariable Long id) {
        return assetService.returnAsset(id);
    }
}
