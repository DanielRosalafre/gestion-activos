package com.company.assetsystem.controller;

import com.company.assetsystem.service.AssetService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final AssetService assetService;

    public ReportController(AssetService assetService) {
        this.assetService = assetService;
    }

    @GetMapping("/summary")
    public Map<String, Object> getSummary() {
        return assetService.getSummary();
    }
}
