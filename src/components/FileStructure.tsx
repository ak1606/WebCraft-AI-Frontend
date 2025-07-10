import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Folder, File, Terminal } from 'lucide-react';

interface FileStructureProps {
  isVisible: boolean;
  files: Array<{
    name: string;
    type: 'file' | 'folder';
    content?: string;
    language?: string;
  }>;
}

export default function FileStructure({ isVisible, files }: FileStructureProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 p-4 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Generated Project Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {files.map((file, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {file.type === 'folder' ? (
                      <Folder className="w-4 h-4 text-blue-500" />
                    ) : (
                      <File className="w-4 h-4 text-gray-500" />
                    )}
                    <span className="font-mono text-sm">{file.name}</span>
                    {file.language && (
                      <Badge variant="secondary" className="text-xs">
                        {file.language}
                      </Badge>
                    )}
                  </div>
                  {file.content && (
                    <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                      <code>{file.content}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
