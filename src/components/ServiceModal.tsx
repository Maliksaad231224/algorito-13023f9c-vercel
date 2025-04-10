
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  image?: string;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  features,
  image
}) => {
  const { t } = useLanguage();
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          {/* Removed the duplicate close button here */}
        </DialogHeader>
        
        <div className="grid gap-6">
          {image && (
            <div className="mx-auto">
              <img 
                src={image} 
                alt={title} 
                className="rounded-md max-h-[200px] object-cover"
              />
            </div>
          )}
          
          <DialogDescription className="text-lg">
            {description}
          </DialogDescription>
          
          <div>
            <h4 className="font-semibold mb-2 text-lg">{t('keyFeatures')}:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-algorito-500 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
