
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export let testPackageJSON = {
    "runtimeDependencies": [
        {
            "description": "OmniSharp for Windows (.NET 4.6 / x86)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505823/5804b7d3b5eeb7e4ae812a7cff03bd52/omnisharp-win-x86-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-win-x86-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "win32"
            ],
            "architectures": [
                "x86"
            ],
            "installTestPath": "./.omnisharp/OmniSharp.exe",
            "platformId": "win-x86",
            "isFramework": true
        },
        {
            "description": "OmniSharp for Windows (.NET 6 / x86)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505823/5804b7d3b5eeb7e4ae812a7cff03bd52/omnisharp-win-x86-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-win-x86-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "win32"
            ],
            "architectures": [
                "x86"
            ],
            "installTestPath": "./.omnisharp/OmniSharp.exe",
            "platformId": "win-x86",
            "isFramework": false
        },
        {
            "description": "OmniSharp for Windows (.NET 4.6 / x64)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505821/c570a9e20dbf7172f79850babd058872/omnisharp-win-x64-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-win-x64-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "win32"
            ],
            "architectures": [
                "x86_64"
            ],
            "installTestPath": "./.omnisharp/OmniSharp.exe",
            "platformId": "win-x64",
            "isFramework": true
        },
        {
            "description": "OmniSharp for Windows (.NET 6 / x64)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505821/c570a9e20dbf7172f79850babd058872/omnisharp-win-x64-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-win-x64-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "win32"
            ],
            "architectures": [
                "x86_64"
            ],
            "installTestPath": "./.omnisharp/OmniSharp.exe",
            "platformId": "win-x64",
            "isFramework": false
        },
        {
            "description": "OmniSharp for OSX (Framework)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505818/6b99c6a86da3221919158ca0f36a3e45/omnisharp-osx-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-osx-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "darwin"
            ],
            "binaries": [
                "./mono.osx",
                "./run"
            ],
            "installTestPath": "./.omnisharp/mono.osx",
            "platformId": "osx",
            "isFramework": true
        },
        {
            "description": "OmniSharp for OSX",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505818/6b99c6a86da3221919158ca0f36a3e45/omnisharp-osx-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-osx-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "darwin"
            ],
            "binaries": [
                "./mono.osx",
                "./run"
            ],
            "installTestPath": "./.omnisharp/mono.osx",
            "platformId": "osx",
            "isFramework": false
        },
        {
            "description": "OmniSharp for Linux (x86 Framework)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505817/b710ec9c2bedc0cfdb57da82da166c47/omnisharp-linux-x86-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-linux-x86-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "linux"
            ],
            "architectures": [
                "x86",
                "i686"
            ],
            "binaries": [
                "./mono.linux-x86",
                "./run"
            ],
            "installTestPath": "./.omnisharp/mono.linux-x86",
            "platformId": "linux-x86",
            "isFramework": true
        },
        {
            "description": "OmniSharp for Linux (x86)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505817/b710ec9c2bedc0cfdb57da82da166c47/omnisharp-linux-x86-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-linux-x86-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "linux"
            ],
            "architectures": [
                "x86",
                "i686"
            ],
            "binaries": [
                "./mono.linux-x86",
                "./run"
            ],
            "installTestPath": "./.omnisharp/mono.linux-x86",
            "platformId": "linux-x86",
            "isFramework": false
        },
        {
            "description": "OmniSharp for Linux (x64 Framework)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505485/3f8a10409240decebb8a3189429f3fdf/omnisharp-linux-x64-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-linux-x64-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "linux"
            ],
            "architectures": [
                "x86_64"
            ],
            "binaries": [
                "./mono.linux-x86_64",
                "./run"
            ],
            "installTestPath": "./.omnisharp/mono.linux-x86_64",
            "platformId": "linux-x64",
            "isFramework": true
        },
        {
            "description": "OmniSharp for Linux (x64)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505485/3f8a10409240decebb8a3189429f3fdf/omnisharp-linux-x64-1.28.0.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-linux-x64-1.28.0.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "linux"
            ],
            "architectures": [
                "x86_64"
            ],
            "binaries": [
                "./mono.linux-x86_64",
                "./run"
            ],
            "installTestPath": "./.omnisharp/mono.linux-x86_64",
            "platformId": "linux-x64",
            "isFramework": false
        },
        {
            "description": "OmniSharp for Test OS(architecture framework)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505485/3f8a10409240decebb8a3189429f3fdf/omnisharp-os-architecture-version.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-os-architecture-version.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "platform1"
            ],
            "architectures": [
                "architecture"
            ],
            "binaries": [
                "./binary1",
                "./binary2"
            ],
            "installTestPath": "./.omnisharp/binary",
            "platformId": "os-architecture",
            "isFramework": true
        },
        {
            "description": "OmniSharp for Test OS(architecture)",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100505485/3f8a10409240decebb8a3189429f3fdf/omnisharp-os-architecture-version.zip",
            "fallbackUrl": "https://omnisharpdownload.blob.core.windows.net/ext/omnisharp-os-architecture-version.zip",
            "installPath": ".omnisharp",
            "platforms": [
                "platform1"
            ],
            "architectures": [
                "architecture"
            ],
            "binaries": [
                "./binary1",
                "./binary2"
            ],
            "installTestPath": "./.omnisharp/binary",
            "platformId": "os-architecture",
            "isFramework": false
        },
        {
            "description": "Non omnisharp package without platformId",
            "url": "https://download.visualstudio.microsoft.com/download/pr/100317420/a30d7e11bc435433d297adc824ee837f/coreclr-debug-win7-x64.zip",
            "fallbackUrl": "https://vsdebugger.blob.core.windows.net/coreclr-debug-1-14-4/coreclr-debug-win7-x64.zip",
            "installPath": ".debugger",
            "platforms": [
                "win32"
            ],
            "architectures": [
                "x86_64"
            ],
            "installTestPath": "./.debugger/vsdbg-ui.exe"
        }
    ]
};
