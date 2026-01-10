import { Modal } from '~/components/settings/modal';
import { useData } from '~/hooks/data';
import { useEffect, useState } from 'react';
import { Checkbox } from '~/components/settings/checkbox';
import { Button } from '~/components/actions/button';
import type { CheckboxEvent } from '~/types/checkbox';

export const Settings = () => {
  const {
    coreSkills,
    setCoreSkills,
    extraSkills,
    setExtraSkills,
    selectedAllExtraSkills,
    toggleAllExtraSkills,
  } = useData();

  const handleChangeCoreSkill = ({ label, value }: CheckboxEvent) =>
    setCoreSkills((prev) => ({ ...prev, [label]: value }));
  const handleChangeExtraSkill = ({ label, value }: CheckboxEvent) =>
    setExtraSkills((prev) => ({ ...prev, [label]: value }));
  const handleChangeAllExtraSkills = ({ value }: CheckboxEvent) => {
    toggleAllExtraSkills(value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => setIsOpen((prev) => !prev);
  const handleCloseModal = (e: KeyboardEvent) =>
    e.key === 'Escape' && setIsOpen(false);

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);
    return () => document.removeEventListener('keydown', handleCloseModal);
  }, []);
  return (
    <>
      <Button icon="menu" onClick={handleToggleModal} />
      <Modal isOpen={isOpen} title="Settings" onToggle={handleToggleModal}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold">Core skills</div>
            <ul className="flex flex-col gap-1">
              {Object.entries(coreSkills).map(([skill, value]) => (
                <li key={skill} className="">
                  <Checkbox
                    label={skill}
                    value={value}
                    onChange={handleChangeCoreSkill}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">Extra skills</div>
              <Checkbox
                label="Select all"
                value={selectedAllExtraSkills}
                onChange={handleChangeAllExtraSkills}
              />
            </div>
            <ul className="flex flex-col gap-1">
              {Object.entries(extraSkills).map(([skill, value]) => (
                <li key={skill} className="">
                  <Checkbox
                    label={skill}
                    value={value}
                    onChange={handleChangeExtraSkill}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
